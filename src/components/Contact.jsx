import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <a
                        href="mailto:acharprasanna5@gmail.com"
                        className="hover:scale-96 transition-all 
                        ease-in-out
                        duration-300  hover:shadow-lg
                        flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                        <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">acharprasanna5@gmail.com</p>
                    </a>

                    <a
                        href="tel:+91701981381"
                        className="hover:scale-96 transition-all 
                        ease-in-out
                        duration-300  hover:shadow-lg flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-green-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                        <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">+91 7019813818</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/prasanna-achar-s-e-69475a297/" // Replace with actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-96 transition-all 
                        ease-in-out
                        duration-300  hover:shadow-lg
                        flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                        <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6 text-blue-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Connect on LinkedIn</p>
                    </a>

                    <a
                        href="https://github.com/prasanna-achar" // Replace with actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-96 transition-all 
                        ease-in-out
                        duration-300  hover:shadow-lg
                        flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                        <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">View Projects</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
