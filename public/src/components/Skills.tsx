import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  GitBranch,
  Cloud,
  Layers,
  Monitor,
  Coffee
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: Code, color: 'from-yellow-400 to-blue-500' },
    { name: 'Java', icon: Coffee, color: 'from-orange-400 to-red-500' },
    { name: 'HTML', icon: Globe, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: Monitor, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: Code, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Full Stack', icon: Layers, color: 'from-purple-400 to-pink-500' },
    { name: 'Linux', icon: Terminal, color: 'from-black to-gray-600' },
    { name: 'DevOps', icon: Server, color: 'from-green-400 to-blue-500' },
    { name: 'Docker', icon: Database, color: 'from-blue-500 to-blue-700' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'from-gray-700 to-gray-900' },
    { name: 'Google Cloud', icon: Cloud, color: 'from-blue-400 to-green-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent mb-4">
            Skills & Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium text-sm sm:text-base">
                  {skill.name}
                </h3>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-gray-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    filter: 'blur(8px)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-sky-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};

export default Skills;