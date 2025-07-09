import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certification'>('education');

  const educationData = {
    degree: 'B.Tech – Computer Science Engineering (AI & Data Science)',
    college: 'Vivekananda Global University, Jaipur',
    year: '2024',
    grade: 'First Class',
  };

  const certifications = [
    {
      name: 'AWS Cloud Foundation',
      year: '2024',
      description: 'Comprehensive understanding of AWS cloud services and architecture',
    },
    {
      name: 'Business Model Canvas',
      year: '2025',
      description: 'Strategic business planning and model development',
    },
  ];

  const tabVariants = {
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
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic achievements and professional certifications
          </p>
        </motion.div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-lg p-1 flex">
            <motion.button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('certification')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'certification'
                  ? 'bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'education' && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-gray-300 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {educationData.college}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sky-400 font-semibold mb-2">Year</h4>
                  <p className="text-white">{educationData.year}</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sky-400 font-semibold mb-2">Grade</h4>
                  <p className="text-white">{educationData.grade}</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'certification' && (
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-gray-300 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                        <p className="text-gray-300">{cert.year}</p>
                      </div>
                    </div>
                    <motion.button
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900 rounded-lg font-medium hover:shadow-lg hover:shadow-sky-400/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Show Certificate</span>
                    </motion.button>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;