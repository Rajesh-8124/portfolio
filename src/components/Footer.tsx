import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education & Certificates', id: 'education' },
  ];

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-12" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-gray-300 flex items-center justify-center text-lg font-bold text-gray-900">
                RK
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent">
                Rajesh Kumar
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Software Engineer and Creator passionate about building innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-sky-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={scrollToTop}
                className="block text-gray-300 hover:text-sky-400 transition-colors duration-200 text-sm"
              >
                Back to Top
              </button>
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Thank You</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 md:ml-auto">
              Thank you for visiting my portfolio. I look forward to connecting with you!
            </p>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900 rounded-lg font-medium hover:shadow-lg hover:shadow-sky-400/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="text-center pt-8 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Created by{' '}
            <span className="bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent font-medium">
              Rajesh Kumar
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;