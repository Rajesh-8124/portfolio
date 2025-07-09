import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Brain, 
  Server, 
  Layers, 
  Github,
  ExternalLink
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Python Development',
      icon: Code,
      description: 'Advanced Python applications with modern frameworks',
      gradient: 'from-yellow-400 to-blue-500',
      github: 'https://github.com/Rajesh-8124',
    },
    {
      title: 'Linux Systems',
      icon: Terminal,
      description: 'System administration and automation scripts',
      gradient: 'from-gray-700 to-gray-900',
      github: 'https://github.com/Rajesh-8124',
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'AI models and data science solutions',
      gradient: 'from-purple-400 to-pink-500',
      github: 'https://github.com/Rajesh-8124',
    },
    {
      title: 'DevOps Solutions',
      icon: Server,
      description: 'Container orchestration and CI/CD pipelines',
      gradient: 'from-green-400 to-blue-500',
      github: 'https://github.com/Rajesh-8124',
    },
    {
      title: 'Full Stack Applications',
      icon: Layers,
      description: 'End-to-end web applications with modern tech stack',
      gradient: 'from-blue-400 to-purple-500',
      github: 'https://github.com/Rajesh-8124',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions across various domains of technology
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer h-full"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(56, 189, 248, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  style={{
                    filter: 'blur(12px)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax elements */}
        <motion.div
          className="absolute top-40 left-20 w-32 h-32 bg-sky-400/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-gray-300/10 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default Projects;