import React from 'react';
import { motion } from 'framer-motion';
import interior1 from '../../assets/services/2020-10_1_CARAVANE_066_0948365f-4db1-4195-81cc-1654bed38982.webp';
import interior2 from '../../assets/services/CRVN_20240909_SHOPS-024_HD_94ff941a-106f-46ec-925d-d6805225da0b.webp';
import interior3 from '../../assets/services/MG_5079.webp';
import interior4 from '../../assets/services/MG_4617.webp';
import interior5 from '../../assets/services/HSC_RAANA_-_BISCUIT.webp';
import interior6 from '../../assets/services/CARAVANE_LYDIE_4Q9A9897.webp';

const LuxuryInterior = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      title: "Bespoke Design",
      description: "Tailored interior solutions for your unique space",
      icon: "✧"
    },
    {
      title: "Premium Materials",
      description: "Curated selection of luxury materials",
      icon: "❖"
    },
    {
      title: "Expert Styling",
      description: "Professional interior styling services",
      icon: "◈"
    },
    {
      title: "Full Service",
      description: "End-to-end project management",
      icon: "✦"
    }
  ];

  const collections = [
    {
      title: "Modern Elegance",
      image: interior1,
      description: "Contemporary luxury with timeless appeal",
      price: "Custom Quote",
      tag: "SIGNATURE"
    },
    {
      title: "Boutique Living",
      image: interior2,
      description: "Sophisticated retail-inspired spaces",
      price: "Custom Quote",
      tag: "PREMIUM"
    },
    {
      title: "Urban Oasis",
      image: interior3,
      description: "Tranquil city living environments",
      price: "Custom Quote",
      tag: "LUXURY"
    },
    {
      title: "Classic Revival",
      image: interior4,
      description: "Traditional elegance reimagined",
      price: "Custom Quote",
      tag: "HERITAGE"
    },
    {
      title: "Minimalist Haven",
      image: interior5,
      description: "Clean lines and sophisticated simplicity",
      price: "Custom Quote",
      tag: "CONTEMPORARY"
    },
    {
      title: "Artisanal Living",
      image: interior6,
      description: "Handcrafted details and unique pieces",
      price: "Custom Quote",
      tag: "EXCLUSIVE"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      {/* Hero Banner Section */}
      <motion.div 
        className="relative h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-20" />
          <motion.div 
            className="grid grid-cols-3 h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="h-full">
              <img src={interior1} alt="Modern Elegance" className="h-full w-full object-cover" />
            </div>
            <div className="h-full">
              <img src={interior2} alt="Boutique Living" className="h-full w-full object-cover" />
            </div>
            <div className="h-full">
              <img src={interior3} alt="Urban Oasis" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="font-['Playfair_Display'] text-8xl font-bold text-white mb-6">
              Luxury Interiors
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Transform your space into a masterpiece of design with our bespoke interior solutions, 
              where every detail is crafted to perfection.
            </p>
            <motion.button
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/20 
                         hover:bg-white/20 transition-colors font-['Plus_Jakarta_Sans']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          </motion.div>
        </div>
      </motion.div>

      {/* Rest of the content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-[2px] bg-white/30" />
            <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
              Our Services
            </span>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-4 text-white/80">{feature.icon}</div>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:opacity-90 transition-all duration-300" />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-white/80">
                    {item.tag}
                  </span>
                </div>
                <p className="text-white/60 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-['Playfair_Display'] font-bold text-white">{item.price}</span>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-white/20 transition-colors">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LuxuryInterior;
