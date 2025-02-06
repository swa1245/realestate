import React from 'react';
import { motion } from 'framer-motion';
import blanket1 from '../../assets/Blankets/BONSOIRS-HOUSSE-COUETTE-GAZE-COTON-RAYURE-VINTAGE-BLEUE-PP-1.webp';
import blanket2 from '../../assets/Blankets/BONSOIRS-PARURE-GAZE-COTON-RAYURE-VINTAGE-BLEUE-PP-2-GADS.webp';
import blanket3 from '../../assets/Blankets/bonsoirs-housse-couette-flanelle-rayure-pondi-pp-1.webp';
import blanket4 from '../../assets/Blankets/bonsoirs-oreillers-pangea-oiseaux-pp-1.webp';
import blanket5 from '../../assets/Blankets/couette-rayure-beige-pp-1.webp';
import blanket6 from '../../assets/Blankets/housse-couette-lin-lave-juste-le-bleu-pp-1_8503ad0a-cb4e-4657-97d3-232e8b31db61.webp';
import blanket7 from '../../assets/Blankets/housse-couette-satin-lave-tabac-pp-1.webp';
import blanket8 from '../../assets/Blankets/oreillers-percale-coton-vert-foret-pp-1.webp';
import blanket9 from '../../assets/Blankets/satin-lave-tabac-pp-2-gads_71b7c2a7-abec-4415-9249-bd0ab0554908.webp';

const BlanketDesign = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "Artisanal Craftsmanship",
      description: "Each piece is meticulously crafted by master artisans",
      icon: "✧"
    },
    {
      title: "Sustainable Luxury",
      description: "Eco-conscious materials meeting premium standards",
      icon: "❖"
    },
    {
      title: "Bespoke Design",
      description: "Customizable options for your unique style",
      icon: "◈"
    },
    {
      title: "Timeless Elegance",
      description: "Classic patterns with contemporary appeal",
      icon: "✦"
    }
  ];

  const collections = [
    {
      title: "Vintage Blue Gaze",
      image: blanket1,
      description: "Luxurious cotton blend with vintage-inspired patterns",
      price: "€289",
      tag: "BESTSELLER"
    },
    {
      title: "Blue Parure Collection",
      image: blanket2,
      description: "Light as air, soft as clouds",
      price: "€259",
      tag: "NEW ARRIVAL"
    },
    {
      title: "Flannel Rayure Pondi",
      image: blanket3,
      description: "Warmth meets contemporary design",
      price: "€299",
      tag: "PREMIUM"
    },
    {
      title: "Pangea Birds Edition",
      image: blanket4,
      description: "Nature-inspired patterns for serene spaces",
      price: "€319",
      tag: "LIMITED EDITION"
    },
    {
      title: "Beige Rayure Classic",
      image: blanket5,
      description: "Earth-toned elegance for modern spaces",
      price: "€269",
      tag: "TRENDING"
    },
    {
      title: "Le Bleu Linen",
      image: blanket6,
      description: "Pure linen luxury in ocean blues",
      price: "€349",
      tag: "LUXURY"
    },
    {
      title: "Satin Tabac Dreams",
      image: blanket7,
      description: "Premium satin finish in rich tobacco hues",
      price: "€329",
      tag: "EXCLUSIVE"
    },
    {
      title: "Forest Green Percale",
      image: blanket8,
      description: "Crisp percale cotton in verdant tones",
      price: "€279",
      tag: "ORGANIC"
    },
    {
      title: "Tabac Satin Royale",
      image: blanket9,
      description: "Rich hues for sophisticated interiors",
      price: "€309",
      tag: "SIGNATURE"
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
            src={blanket1}
            alt="Luxury Blanket"
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
                <span className="text-white/60 uppercase tracking-[0.2em] text-sm">Artisanal Collection</span>
                <div className="w-20 h-[1px] bg-white/30" />
              </div>
              <h1 className="text-7xl font-bold mb-8 text-white font-['Playfair_Display'] leading-tight">
                Exquisite Blanket<br />Artistry
              </h1>
              <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
                Where comfort meets sophistication in a symphony of textures and designs crafted for the most discerning interiors.
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

      {/* Features Section with Glass Effect */}
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

      {/* Collection Grid with Hover Effects */}
      <div className="py-32 bg-[#0C0C0C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white font-['Playfair_Display']">
              Curated Collections
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each piece tells a story of craftsmanship and luxury, designed to transform your space into a sanctuary of comfort.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
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

      {/* Contact Section with Parallax */}
      <div className="relative py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <motion.img
            src={blanket2}
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
              Experience Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Let our design experts help you create the perfect ambiance for your space.
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

export default BlanketDesign;
