import React from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code2 className="w-6 h-6 text-blue-500" />,
            skills: ['Java', 'JavaScript', 'Python', 'C', 'SQL', 'C#']
        },
        {
            title: 'Frameworks & Libraries',
            icon: <Layout className="w-6 h-6 text-purple-500" />,
            skills: ['Spring Boot', 'Spring', 'React.js', 'ExpressJS', 'Prisma', 'JDBC', 'Zustand']
        },
        {
            title: 'Developer Tools',
            icon: <Terminal className="w-6 h-6 text-green-500" />,
            skills: ['Git', 'Postman', 'VSCode', 'IntelliJ IDEA', 'Docker']
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building robust full-stack applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-97 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
