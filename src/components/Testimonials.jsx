import { motion } from 'framer-motion';
import { testimonials } from '../data/Testimonials'

export default function Testimonials({ darkMode }) {
    return (
        <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        What Our <span className="text-blue-600">Clients</span> Say
                    </h2>
                    <p className={`mt-3 max-w-2xl mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Trusted by businesses of all sizes
                    </p>
                </motion.div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.7 }}
                                className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-md`}
                            >
                                <div className="flex items-center mb-6">
                                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">{testimonial.name}</h3>
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    "{testimonial.content}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}