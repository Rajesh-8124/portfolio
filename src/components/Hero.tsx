import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, ArrowDown } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcfsj6IKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQVQKL0Y5IDEyIFRmCjcyIDcyMCBUZAooUmFqZXNoIEt1bWFyJ3MgUmVzdW1lKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDIwNCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDUKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjI5OAolJUVPRgo=';
    link.download = 'Rajesh_Kumar_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    { icon: MapPin, text: 'Jaipur', href: '#' },
    { icon: Mail, text: 'rajesh100998kumar@gmail.com', href: 'mailto:rajesh100998kumar@gmail.com' },
    { icon: Phone, text: '9694475096', href: 'tel:9694475096' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/rajesh-kumar-823332354' },
    { icon: Github, text: 'GitHub', href: 'https://github.com/Rajesh-8124' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sky-400 to-gray-300 bg-clip-text text-transparent">
                Rajesh Kumar
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Engineer and Creator
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-sky-400 to-gray-300 text-gray-900 rounded-lg font-medium hover:shadow-lg hover:shadow-sky-400/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={handleResumeDownload}
                className="px-8 py-3 border border-sky-400 text-sky-400 rounded-lg font-medium hover:bg-sky-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 rounded-full bg-gradient-to-r from-sky-400 to-gray-300 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-sky-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-sky-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;