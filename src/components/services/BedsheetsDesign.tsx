import React from 'react';
import { motion } from 'framer-motion';
import bedsheet1 from '../../assets/Bedsheets/1.webp';
import bedsheet2 from '../../assets/Bedsheets/BONSOIRS-DECORATION-COUVRE-LIT-SATIN-HOUBLON-PP-2-GADS_d80d6399-dd32-4b3c-9da7-17eab40a21ef.webp';
import bedsheet3 from '../../assets/Bedsheets/bonsoirs-futon-paradis-dore-pp-2-gads.webp';
import bedsheet4 from '../../assets/Bedsheets/couvre-lit-coton-le-vert-doux-pp-5.webp';
import bedsheet5 from '../../assets/Bedsheets/couvre-lit-matelasse-le-creme-pp-3-gads.webp';
import bedsheet6 from '../../assets/Bedsheets/filters_quality(80) (1).webp';
import bedsheet7 from '../../assets/Bedsheets/filters_quality(80) (2).webp';
import bedsheet8 from '../../assets/Bedsheets/filters_quality(80) (3).webp';
import bedsheet9 from '../../assets/Bedsheets/filters_quality(80) (4).webp';
import bedsheet10 from '../../assets/Bedsheets/filters_quality(80).webp';

const BedsheetsDesign = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "Premium Cotton",
      description: "Luxurious Egyptian cotton for ultimate comfort",
      icon: "✧"
    },
    {
      title: "Artisanal Design",
      description: "Hand-crafted patterns and detailed finishes",
      icon: "❖"
    },
    {
      title: "Custom Sizing",
      description: "Perfect fit for any bed dimension",
      icon: "◈"
    },
    {
      title: "Color Harmony",
      description: "Curated palettes for elegant spaces",
      icon: "✦"
    }
  ];

  const collections = [
    {
      title: "Royal Elegance",
      image: bedsheet1,
      description: "Timeless sophistication in pure cotton",
      price: "€399",
      tag: "SIGNATURE"
    },
    {
      title: "Satin Houblon",
      image: bedsheet2,
      description: "Luxurious satin finish with delicate patterns",
      price: "€459",
      tag: "PREMIUM"
    },
    {
      title: "Golden Paradise",
      image: bedsheet3,
      description: "Futon cover in radiant golden hues",
      price: "€379",
      tag: "BESTSELLER"
    },
    {
      title: "Le Vert Doux",
      image: bedsheet4,
      description: "Soft cotton in soothing green tones",
      price: "€349",
      tag: "ORGANIC"
    },
    {
      title: "Crème Matelassé",
      image: bedsheet5,
      description: "Quilted excellence in cream",
      price: "€429",
      tag: "LUXURY"
    },
    {
      title: "Modern Serenity",
      image: bedsheet6,
      description: "Contemporary design for modern spaces",
      price: "€389",
      tag: "NEW ARRIVAL"
    },
    {
      title: "Urban Chic",
      image: bedsheet7,
      description: "Sophisticated patterns for city living",
      price: "€369",
      tag: "TRENDING"
    },
    {
      title: "Classic Comfort",
      image: bedsheet8,
      description: "Traditional elegance meets modern comfort",
      price: "€409",
      tag: "EXCLUSIVE"
    },
    {
      title: "Midnight Dream",
      image: bedsheet9,
      description: "Deep, rich tones for peaceful nights",
      price: "€439",
      tag: "LIMITED EDITION"
    },
    {
      title: "Pure Elegance",
      image: bedsheet10,
      description: "Minimalist design in pure luxury",
      price: "€419",
      tag: "ARTISANAL"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0C0C0C]"
    >
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img
            src={bedsheet1}
            alt="Luxury Bedsheet"
            className="w-full h-full object-cover"
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{ repeat: Infinity, duration: 20, repeatType: "reverse", ease: "linear" }}
          />
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/blueprint-grid.png')] opacity-10 z-20" />
        
        <div className="relative z-30 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-[1px] bg-white/30" />
                <span className="text-white/60 uppercase tracking-[0.2em] text-sm">Luxury Collection</span>
                <div className="w-20 h-[1px] bg-white/30" />
              </div>
              <h1 className="text-7xl font-bold mb-8 text-white font-['Playfair_Display'] leading-tight">
                Exquisite Bedsheets<br />Collection
              </h1>
              <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
                Transform your bedroom into a sanctuary of luxury with our premium bedsheet collections.
              </p>
              <motion.div className="flex gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  Explore Collection
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-[1px] h-20 bg-white/20 mx-auto mb-2" />
          <p className="text-white/60 text-sm uppercase tracking-widest">Scroll</p>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#1C1C1C] to-[#0C0C0C]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="text-3xl mb-6 text-white/80">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="py-32 bg-[#0C0C0C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white font-['Playfair_Display']">
              Premium Collections
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each piece is meticulously crafted to provide the perfect blend of comfort and elegance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden "
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[3/4]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Product Tag */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{item.tag}</span>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <motion.img
            src={bedsheet2}
            alt="Contact Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 10 }}
          />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-white font-['Playfair_Display']">
              Experience True Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Let our design experts help you create the perfect bedroom sanctuary.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-lg"
            >
              Schedule Your Private Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BedsheetsDesign;
