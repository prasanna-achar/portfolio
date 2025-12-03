import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="profile" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 text-center md:text-left order-2 md:order-1">
                    <div className="space-y-4">
                        <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400">Hello, I'm</h2>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Prasanna Achar S E
                        </h1>
                        <h3 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                            Full Stack Developer
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Passionate about building scalable microservices and modern web applications.
                            Specializing in Spring Boot and React to create seamless user experiences.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="hover:scale-96 transition-all duration-500 ease-in-out hover:shadow-lg
                            inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="/prasanna_achar.pdf" download="true"
                            className='hover:scale-96 transition-all duration-500 ease-in-out hover:shadow-lg
                            inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg transition-all shadow-sm hover:shadow-md'
                        >
                            Download Resume
                            <Download className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <img
                            src="/My_pic.jpg"
                            alt="Prasanna Achar S E"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
