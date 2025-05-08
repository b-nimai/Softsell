import { motion } from 'framer-motion';
import { features } from '../data/WhyChooseUs';
import Card from './HowItWorkCard1';

export default function WhyChooseUs({ darkMode }) {
    return (
        <section id="why-choose-us" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 , delay: 0.5}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Why Choose <span className="text-blue-600">SoftSell</span>
                    </h2>
                    <p className={`mt-3 max-w-2xl mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        We make selling your software licenses simple, secure, and profitable
                    </p>
                </motion.div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.8 }}
                                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                            >
                                <Card
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                        </svg>
                                    }
                                    shape={'lg'}
                                    title={feature.name}
                                    description={feature.description}
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