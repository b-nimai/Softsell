import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenAI from 'openai';

const exampleQuestions = [
    "How do I sell my license?",
    "What types of software do you buy?",
    "How long does the process take?",
    "What documentation do I need?"
];

export default function ChatWidget({ darkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true 
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Call OpenAI API
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant for SoftSell, a platform that helps businesses sell their unused software licenses. Keep responses professional but friendly. If asked about something outside your knowledge, politely direct them to the contact form."
                    },
                    {
                        role: "user",
                        content: inputValue
                    }
                ],
                temperature: 0.7,
                max_tokens: 150
            });

            const aiResponse = response.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
            setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
        } catch (error) {
            console.error("OpenAI API error:", error);
            setMessages(prev => [...prev, {
                text: "Sorry, I'm having trouble connecting. Please try again later.",
                sender: 'ai'
            }]);
        }

        setIsLoading(false);
    };

    const handleExampleQuestion = async (question) => {
        setInputValue(question);
        await new Promise(resolve => setTimeout(resolve, 50));
        handleSendMessage();
    };

    return (
        <>
            {/* Floating chat button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </motion.button>

            {/* Chat container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className={`fixed bottom-24 right-6 z-40 w-full max-w-md rounded-lg shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                        style={{
                            height: '70vh',
                            maxHeight: '600px',
                            width: 'calc(100% - 3rem)', 
                            maxWidth: '420px' 
                        }}
                    >
                        {/* Header */}
                        <div className={`p-4 border-b ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                            <h3 className="font-bold text-lg">SoftSell Assistant</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Ask me about selling your software licenses
                            </p>
                        </div>

                        {/* Chat body */}
                        <div className="h-full flex flex-col">
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            How can I help you today?
                                        </p>
                                        <div className="grid grid-cols-1 gap-2">
                                            {exampleQuestions.map((question, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleExampleQuestion(question)}
                                                    className={`px-4 py-2 rounded-lg text-sm text-left ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                                                >
                                                    {question}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    messages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-lg px-4 py-2 ${message.sender === 'user'
                                                    ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                                                    : darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
                                            >
                                                {message.text}
                                            </div>
                                        </div>
                                    ))
                                )}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className={`max-w-[80%] rounded-lg px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input area */}
                            <div className={`p-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Type your question..."
                                        className={`flex-1 px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={isLoading}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}