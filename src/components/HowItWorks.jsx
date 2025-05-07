import { motion } from 'framer-motion';
import Card from './HowItWorkCard1';
import { data } from '../data/HowItWorks'

export default function HowItWorks({ darkMode }) {
    return (
        <section id="how-it-works" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        How <span className="text-blue-600">SoftSell</span> Works
                    </h2>
                    <p className={`mt-3 max-w-2xl mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Selling your unused software licenses has never been easier
                    </p>
                </motion.div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.7 }}
                                className={`flex flex-col items-center p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-md`}
                            >
                                <Card 
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                                        </svg>
                                    } 
                                    shape={'full'}
                                    title={step.title} 
                                    description={step.description} 
                                    darkMode={darkMode} 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}