import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rajesh100998kumar@gmail.com',
      href: 'mailto:rajesh100998kumar@gmail.com',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9694475096',
      href: 'tel:9694475096',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/rajesh-kumar-823332354',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur, India',
      href: '#',
      gradient: 'from-purple-400 to-pink-500',
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
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities to work together
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.a
                href={item.href}
                className="block backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(56, 189, 248, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.value}
                </p>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  style={{
                    filter: 'blur(12px)',
                  }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              href="mailto:rajesh100998kumar@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900 rounded-lg font-medium hover:shadow-lg hover:shadow-sky-400/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;