import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Profile', href: '#profile' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Prasanna
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:scale-96 transition-all 
                                ease-in-out
                                duration-300  hover:shadow-lg
                                text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
