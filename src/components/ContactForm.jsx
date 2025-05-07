import { useState } from 'react';
import { motion } from 'framer-motion';
// import getAQuoteImage from '../assets/getAQuote.png';
import getAQuoteImage from '../assets/formbg.png';

const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'AutoCAD',
    'VMware',
    'Other'
];

export default function ContactForm({ darkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.licenseType) newErrors.licenseType = 'License type is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                licenseType: '',
                message: ''
            });
        }
    };

    return (
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Get a <span className="text-blue-600">Quote</span>
                    </h2>
                    <p className={`mt-3 max-w-2xl mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Ready to sell your licenses? Contact us today.
                    </p>
                </motion.div>

                <div className="mt-10">
                    {/* Mobile layout (unchanged) */}
                    <div className="md:hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`max-w-2xl mx-auto p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                        >
                            {/* Mobile form content (same as before) */}
                            {submitted ? (
                                <div className="text-center py-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        We've received your inquiry and will contact you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="company" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 rounded-md border ${errors.company ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                            />
                                            {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="licenseType" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                License Type
                                            </label>
                                            <select
                                                id="licenseType"
                                                name="licenseType"
                                                value={formData.licenseType}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 rounded-md border ${errors.licenseType ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                            >
                                                <option value="">Select a license type</option>
                                                {licenseTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                            {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                            ></textarea>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
                                            >
                                                Submit Inquiry
                                            </button>
                                        </div>
                                    </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Desktop layout (new split view) */}
                    <div className="hidden md:flex gap-8 max-w-6xl mx-auto">
                        {/* Left side - Image with text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex-1 flex flex-col justify-center"
                        >
                            <div className={`p-8 rounded-lg bg-blue-600 text-white shadow-md h-full flex flex-col justify-center`}>
                                <div className="m-auto w-xs p-4 rounded-lg mb-6">
                                    <img
                                        src={getAQuoteImage}
                                        alt="Get a Quote"
                                        className="-translate-y-7 w-full h-auto rounded-lg"
                                    />
                                </div>
                                <h3 className="text-3xl text-center font-bold -mt-12 mb-4">Our Simple Process</h3>
                                <ol className="space-y-5">
                                    <li className="flex items-start">
                                        <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                                        <div>
                                            <h4 className="font-semibold">Fill Out the Form</h4>
                                            <p>Provide basic details about your licenses</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="font-semibold">Quick Response</h4>
                                            <p>We'll call you within 15-30 minutes</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                                        <div>
                                            <h4 className="font-semibold">Price Agreement</h4>
                                            <p>We'll agree on a fair price for your licenses</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                                        <div>
                                            <h4 className="font-semibold">Fast Payment</h4>
                                            <p>Receive payment within 1 business day</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>

                        {/* Right side - Form (unchanged) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex-1"
                        >
                            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md h-full`}>
                                {submitted ? (
                                    <div className="text-center py-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            We've received your inquiry and will contact you shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                                />
                                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="company" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2 rounded-md border ${errors.company ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                                />
                                                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="licenseType" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    License Type
                                                </label>
                                                <select
                                                    id="licenseType"
                                                    name="licenseType"
                                                    value={formData.licenseType}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2 rounded-md border ${errors.licenseType ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                                >
                                                    <option value="">Select a license type</option>
                                                    {licenseTypes.map(type => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                                {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows="4"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                                                ></textarea>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
                                                >
                                                    Submit Inquiry
                                                </button>
                                            </div>
                                        </form>

                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}