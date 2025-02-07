import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace these URLs with your actual image URLs
const sofa1 = "https://images.unsplash.com/photo-1550254478-ead40cc54513";
const sofa2 = "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e";
const sofa3 = "https://images.unsplash.com/photo-1540574163026-643ea20ade25";
const sofa4 = "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89";
const sofa5 = "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17";
const sofa6 = "https://images.unsplash.com/photo-1631679706909-1844bbd07221";

const SofaCouchDesign = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      title: "Custom Design",
      description: "Bespoke sofas tailored to your space",
      icon: "✧"
    },
    {
      title: "Premium Comfort",
      description: "Ergonomic design with luxury materials",
      icon: "❖"
    },
    {
      title: "Artisan Crafted",
      description: "Handmade by master craftsmen",
      icon: "◈"
    },
    {
      title: "Lifetime Quality",
      description: "Built to last generations",
      icon: "✦"
    }
  ];

  const collections = [
    {
      title: "Modern Elegance",
      image: sofa1,
      description: "Contemporary design with timeless appeal",
      price: "€3,999",
      tag: "SIGNATURE"
    },
    {
      title: "Classic Comfort",
      image: sofa2,
      description: "Traditional sophistication meets modern comfort",
      price: "€4,499",
      tag: "PREMIUM"
    },
    {
      title: "Urban Living",
      image: sofa3,
      description: "Space-efficient design for city homes",
      price: "€3,299",
      tag: "CONTEMPORARY"
    },
    {
      title: "Luxury Lounge",
      image: sofa4,
      description: "Ultimate relaxation in pure luxury",
      price: "€5,999",
      tag: "EXCLUSIVE"
    },
    {
      title: "Minimalist Marvel",
      image: sofa5,
      description: "Clean lines and sophisticated simplicity",
      price: "€4,299",
      tag: "DESIGNER"
    },
    {
      title: "Family Haven",
      image: sofa6,
      description: "Spacious comfort for the whole family",
      price: "€6,499",
      tag: "LUXURY"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-black overflow-hidden"
    >
      {/* Hero Banner Section */}
      <motion.div 
        className="relative h-screen"
        variants={itemVariants}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div 
            className="grid grid-cols-3 h-full"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 2,
              ease: [0.6, 0.05, -0.01, 0.9],
              opacity: { duration: 1.5 }
            }}
          >
            <div className="h-full overflow-hidden">
              <motion.img 
                src={sofa1} 
                alt="Modern Elegance" 
                className="h-full w-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <div className="h-full overflow-hidden">
              <motion.img 
                src={sofa2} 
                alt="Classic Comfort" 
                className="h-full w-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            <div className="h-full overflow-hidden">
              <motion.img 
                src={sofa3} 
                alt="Urban Living" 
                className="h-full w-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.h1 
              className="font-['Playfair_Display'] text-8xl font-bold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Luxury Sofas
            </motion.h1>
            <motion.p 
              className="font-['Plus_Jakarta_Sans'] text-xl text-white/80 max-w-2xl mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Experience unparalleled comfort with our collection of handcrafted sofas, 
              where luxury meets timeless design.
            </motion.p>
            <motion.button
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/20 
                         hover:bg-white/20 transition-colors font-['Plus_Jakarta_Sans']"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          </motion.div>
        </div>
      </motion.div>

      {/* Rest of the content */}
      <motion.div 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              className="w-20 h-[2px] bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.span 
              className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider"
              variants={fadeInUp}
            >
              Our Collection
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          variants={stagger} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-white/80">{feature.icon}</div>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={stagger} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                variants={fadeInUp}
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
                  <motion.button 
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SofaCouchDesign;
