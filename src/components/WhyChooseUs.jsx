import { motion } from 'framer-motion';
import { features } from '../data/WhyChooseUs';

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
                                className={`p-6 rounded-lg `}
                            >
                                {/* Why Choose Us points */}
                                <div className="flex w-full flex-col items-center transition-transform duration-300 hover:scale-105">
                                    <div className={`flex items-center justify-center size-20 text-blue-600 mb-6`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2 text-center">
                                        {feature.name}
                                    </h3>
                                    <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {feature.description}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}