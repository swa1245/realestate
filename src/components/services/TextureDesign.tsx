import React from 'react';
import { motion } from 'framer-motion';
import texture1 from '../../assets/textures/rebecca-atwood-carved-ogee-fabric-forest-green-small_600x600_crop_center.webp';
import texture2 from '../../assets/textures/rebecca-atwood-budding-stripe-ocean-blue-small_600x600_crop_center.webp';
import texture3 from '../../assets/textures/rebecca-atwood-candy-fabric-blue-tan-small_600x600_crop_center.webp';
import texture4 from '../../assets/textures/rebecca-atwood-carved-ogee-fabric-clay-small_600x600_crop_center.webp';
import texture5 from '../../assets/textures/rebecca-atwood-carved-ogee-fabric-lagoon-blue-fabric-cutting_600x600_crop_center.webp';
import texture6 from '../../assets/textures/1.webp';

const TextureDesign = () => {
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
      title: "Unique Patterns",
      description: "Exclusive designs crafted by artisans",
      icon: "✧"
    },
    {
      title: "Premium Materials",
      description: "High-quality fabrics and finishes",
      icon: "❖"
    },
    {
      title: "Custom Creation",
      description: "Bespoke patterns for your space",
      icon: "◈"
    },
    {
      title: "Versatile Use",
      description: "Perfect for various applications",
      icon: "✦"
    }
  ];

  const collections = [
    {
      title: "Forest Ogee",
      image: texture1,
      description: "Elegant ogee pattern in forest green",
      price: "€129/m",
      tag: "SIGNATURE"
    },
    {
      title: "Ocean Stripe",
      image: texture2,
      description: "Flowing stripes in ocean blue tones",
      price: "€149/m",
      tag: "PREMIUM"
    },
    {
      title: "Blue Tan Candy",
      image: texture3,
      description: "Playful candy pattern in blue and tan",
      price: "€139/m",
      tag: "DESIGNER"
    },
    {
      title: "Clay Ogee",
      image: texture4,
      description: "Classic ogee pattern in warm clay",
      price: "€119/m",
      tag: "CLASSIC"
    },
    {
      title: "Lagoon Wave",
      image: texture5,
      description: "Fluid wave pattern in lagoon blue",
      price: "€159/m",
      tag: "LUXURY"
    },
    {
      title: "Modern Abstract",
      image: texture6,
      description: "Contemporary abstract design",
      price: "€169/m",
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
              <img src={texture1} alt="Forest Ogee" className="h-full w-full object-cover" />
            </div>
            <div className="h-full">
              <img src={texture2} alt="Ocean Stripe" className="h-full w-full object-cover" />
            </div>
            <div className="h-full">
              <img src={texture3} alt="Blue Tan Candy" className="h-full w-full object-cover" />
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
              Luxury Textures
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover our exquisite collection of handcrafted textures and patterns, 
              designed to transform your space into a masterpiece of tactile elegance.
            </p>
            <motion.button
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/20 
                         hover:bg-white/20 transition-colors font-['Plus_Jakarta_Sans']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
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
              Our Collection
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
                    View Details
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

export default TextureDesign;
