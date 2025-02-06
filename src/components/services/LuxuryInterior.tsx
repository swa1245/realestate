import React from 'react';
import { motion } from 'framer-motion';
import luxuryImg1 from '../../assets/services/IMG_6209_cdbc559d-daba-45bf-8dc9-c97cfec8ef7e.jpg';
import luxuryImg2 from '../../assets/services/MG_4612_b89f7246-2ceb-4efc-aae1-cde6ad4219f8.jpg';
import luxuryImg3 from '../../assets/services/2020-10_1_CARAVANE_066_0948365f-4db1-4195-81cc-1654bed38982.webp';

const LuxuryInterior = () => {
  const features = [
    { title: "Custom Design Solutions", description: "Tailored interior designs that reflect your unique style and preferences" },
    { title: "Space Planning", description: "Optimal space utilization for both aesthetics and functionality" },
    { title: "Material Selection", description: "Premium materials sourced from top global suppliers" },
    { title: "Project Management", description: "End-to-end project coordination and execution" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold mb-8"
        >
          Luxury Interior Design
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300">
              Transform your space into a masterpiece with our premium design solutions that perfectly blend sophistication with functionality.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-1 h-1 bg-white rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={luxuryImg1} alt="Luxury Interior" className="w-full h-[400px] object-cover" />
          </motion.div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Our Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <img src={luxuryImg2} alt="Project 1" className="w-full h-[300px] object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Modern Villa Design</h3>
                  <p className="text-sm text-gray-300">Complete interior transformation</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <img src={luxuryImg3} alt="Project 2" className="w-full h-[300px] object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Penthouse Suite</h3>
                  <p className="text-sm text-gray-300">Luxury residential design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 mb-8">Contact us for a free consultation and let's bring your vision to life.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LuxuryInterior;
