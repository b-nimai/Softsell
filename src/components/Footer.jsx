import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-white'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Our Office</h3>
                        <address className="not-italic font-semibold">
                            College Street<br />
                            Kolkata, 700009<br />
                            India
                        </address>
                    </div>

                    {/* Social Media Icons */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex justify-around">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-300 hover:text-blue-200' text-4xl transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                                className="text-green-300 hover:text-green-200 text-4xl transition-colors">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-200' text-4xl transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="https://www.t.me/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-300 hover:text-blue-200 text-4xl transition-colors">
                                <FaTelegram />
                            </a>
                        </div>
                    </div>

                    {/* Developer Section */}
                    <div className="flex items-center gap-2 justify-center text-center md:text-right text-lg">
                        <p>
                            Developed by
                        </p>
                        <a href="https://nimaibarman.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${darkMode ? 'text-blue-300 hover:underline' : 'text-blue-600 hover:underline'} font-medium`}>
                            Nimai Barman
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-500 text-center">
                    <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;