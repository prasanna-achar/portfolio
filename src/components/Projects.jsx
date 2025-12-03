import React from 'react';
import { Github, ExternalLink, Video, FileText } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'VStream',
            description: 'A microservices-based video streaming platform featuring secure authentication, adaptive video transcoding, and a seamless playback experience.',
            tags: ['Spring Boot', 'WebFlux', 'React', 'FFmpeg', 'Microservices'],
            icon: <Video className="w-8 h-8 text-blue-500" />,
            links: {
                live: 'https://vstreams.info', // Placeholder as per prompt "Live | Github" but no URL provided
                github: 'https://github.com/prasanna-achar/Vstream',
            },
            features: [
                'Secure stateless authentication with JWT',
                'Adaptive streaming with FFmpeg transcoding',
                'API Gateway with WebFlux global filtering',
                'Resend email integration for OTP verification'
            ]
        },
        {
            title: 'NotesHub',
            description: 'A cloud-powered public note-sharing platform focusing on a clean, content-first user experience with rich text editing capabilities.',
            tags: ['React', 'Appwrite', 'TinyMCE', 'React Hook Form'],
            icon: <FileText className="w-8 h-8 text-purple-500" />,
            links: {
                live: 'https://noteshub3.netlify.app',
                github: 'https://github.com/prasanna-achar/noteshub',
            },
            features: [
                'Rich text note creation with TinyMCE',
                'Backend-as-a-Service using Appwrite',
                'Public access with secure ownership rules',
                'Optimized forms with React Hook Form'
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Showcasing real-world applications built with modern architecture and design principles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="hover:scale-98 transition-all duration-500 ease-in-out hover:shadow-lg
                            group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-500/30"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} target="_blank" className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.live} target="_blank" className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-gray-700">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full"
                                    >
                                        {tag}
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

export default Projects;
