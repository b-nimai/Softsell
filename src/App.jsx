
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import heroImage from './assets/herobg.png'
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="relative overflow-hidden font-outfit">
        {/* Animated Bubbles */}
        <motion.div
          initial={{ x: -70 }}
          animate={{ x: '80vw' }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className={`absolute md:top-1/12 z-10 w-64 h-64 rounded-full blur-xl ${darkMode ? 'bg-blue-600 opacity-30' : 'bg-green-600 opacity-30' }`}
        />
        <motion.div
          initial={{ x: "80vw" }}
          animate={{ x: -70 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
          className={`absolute md:top-1/3 top-1/2 z-10 w-80 h-80 rounded-full blur-xl ${darkMode ? 'bg-blue-600 opacity-30' : 'bg-rose-600 md:opacity-30 opacity-20' }`}
        />

        <div className="max-w-7xl md:grid grid-cols-2 md:gap-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl">
            <img src={heroImage} className='w-xl md:w-auto -translate-y-20' />
          </motion.div>

          <div className="-translate-y-10 md:-translate-y-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="p-5 max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">
                Turn Unused Software into <span className="text-blue-600">Cash</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                SoftSell helps businesses monetize their unused software licenses quickly and securely.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
              >
                Sell My Licenses
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <HowItWorks darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />

      <ChatWidget darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;