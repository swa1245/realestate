import React from 'react';
import { motion } from 'framer-motion';
import interior1 from '../assets/services/2020-10_1_CARAVANE_066_0948365f-4db1-4195-81cc-1654bed38982.webp';
import interior2 from '../assets/services/CRVN_20240909_SHOPS-024_HD_94ff941a-106f-46ec-925d-d6805225da0b.webp';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const milestones = [
    { year: "2010", title: "Founded", description: "Started our journey in luxury home decor" },
    { year: "2015", title: "Expansion", description: "Opened our flagship store in the heart of the city" },
    { year: "2018", title: "Innovation", description: "Launched our custom design service" },
    { year: "2023", title: "Global Reach", description: "Serving clients across continents" }
  ];

  const values = [
    {
      title: "Craftsmanship",
      description: "Every piece is crafted with meticulous attention to detail and quality",
      icon: "✧"
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable materials",
      icon: "❖"
    },
    {
      title: "Innovation",
      description: "Blending traditional techniques with modern design innovation",
      icon: "◈"
    },
    {
      title: "Excellence",
      description: "Striving for perfection in every project we undertake",
      icon: "✦"
    }
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "Creative Director",
      description: "20+ years of experience in luxury interior design"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      description: "Award-winning designer specializing in contemporary aesthetics"
    },
    {
      name: "Emma Laurent",
      role: "Textile Specialist",
      description: "Expert in sustainable and luxury fabrics"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img src={interior1} alt="Luxury Interior" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="font-['Playfair_Display'] text-7xl font-bold mb-6">Our Story</h1>
            <p className="font-['Plus_Jakarta_Sans'] text-xl text-white/80 max-w-2xl mx-auto">
              Crafting luxurious spaces and curating exceptional home decor since 2010
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Our Mission</h2>
            <p className="font-['Plus_Jakarta_Sans'] text-lg text-white/80 max-w-3xl mx-auto">
              To transform living spaces into extraordinary sanctuaries that reflect our clients' 
              unique personalities while maintaining the highest standards of quality and craftsmanship.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4 text-white/80">{value.icon}</div>
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="absolute top-0 left-0 w-px h-full bg-white/20 -ml-px" />
                  <div className="pl-8">
                    <span className="text-3xl font-['Playfair_Display'] font-bold text-white/90">{milestone.year}</span>
                    <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-white/60">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-3xl">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold mb-2">{member.name}</h3>
                  <p className="text-white/80 mb-2">{member.role}</p>
                  <p className="text-white/60">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img src={interior2} alt="Contact Us" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Let's Create Something Beautiful</h2>
            <p className="font-['Plus_Jakarta_Sans'] text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your space with our expert team of designers and craftsmen
            </p>
            <motion.button
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/20 
                       hover:bg-white/20 transition-colors font-['Plus_Jakarta_Sans']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
