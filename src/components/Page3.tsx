import React from 'react';
import { motion } from "framer-motion";
import service1 from '../assets/services/IMG_6209_cdbc559d-daba-45bf-8dc9-c97cfec8ef7e.jpg';
import service2 from '../assets/services/MG_4612_b89f7246-2ceb-4efc-aae1-cde6ad4219f8.jpg';
import service3 from '../assets/services/2020-10_1_CARAVANE_066_0948365f-4db1-4195-81cc-1654bed38982.webp';
import service4 from '../assets/services/20240411_CARAVANE_DOMAINEDEPRIMARD-36_d5317bb6-a465-44d7-bd31-2d203f4240ee.webp';
import service5 from '../assets/services/CARAVANE_LYDIE_4Q9A9897.webp';
import service6 from '../assets/services/Caravane_Canapeetlits_34.webp';
import service7 from '../assets/Bedsheets/couvre-lit-coton-le-vert-doux-pp-5.webp';
import service8 from '../assets/Bedsheets/BONSOIRS-DECORATION-COUVRE-LIT-SATIN-HOUBLON-PP-2-GADS_d80d6399-dd32-4b3c-9da7-17eab40a21ef.webp';

interface Service {
  title: string;
  description: string;
  image: string;
  color: string;
  pageNumber: number;
  stats: {
    value: string;
    label: string;
  }[];
}

const services: Service[] = [
  {
    title: "Luxury Interior Design",
    description: "Transform your space into a masterpiece with our premium design solutions that perfectly blend sophistication with functionality.",
    image: service1,
    color: "from-amber-600 to-amber-400",
    pageNumber: 4,
    stats: [
      { value: "250+", label: "Elite Projects" },
      { value: "100%", label: "Client Satisfaction" }
    ]
  },
  {
    title: "Blankets Design",
    description: "Experience the perfect harmony of modern aesthetics and comfort in our thoughtfully crafted living environments.",
    image: service2,
    color: "from-blue-600 to-blue-400",
    pageNumber: 5,
    stats: [
      { value: "180+", label: "Premium Projects" },
      { value: "20+", label: "Design Awards" }
    ]
  },
  {
    title: "Curtain Design",
    description: "Elevate your space with our curated selection of contemporary furniture and decor pieces.",
    image: service3,
    color: "from-purple-600 to-purple-400",
    pageNumber: 6,
    stats: [
      { value: "300+", label: "Unique Designs" },
      { value: "50+", label: "Global Partners" }
    ]
  },
  {
    title: "Towels",
    description: "Create a home that tells your story through our expert residential styling and interior decoration services.",
    image: service4,
    color: "from-rose-600 to-rose-400",
    pageNumber: 7,
    stats: [
      { value: "150+", label: "Happy Homes" },
      { value: "10+", label: "Style Awards" }
    ]
  },
  {
    title: "Sofa Couch Design",
    description: "Transform commercial spaces into inspiring environments that enhance productivity and brand image.",
    image: service5,
    color: "from-emerald-600 to-emerald-400",
    pageNumber: 8,
    stats: [
      { value: "200+", label: "Business Spaces" },
      { value: "95%", label: "Client Retention" }
    ]
  },
  {
    title: "Cushion Design",
    description: "Bespoke furniture solutions tailored to your space and style preferences.",
    image: service6,
    color: "from-indigo-600 to-indigo-400",
    pageNumber: 9,
    stats: [
      { value: "500+", label: "Custom Pieces" },
      { value: "15+", label: "Craftsman Awards" }
    ]
  },
  {
    title: "Texture Design",
    description: "Elevate your space with our curated selection of contemporary furniture and decor pieces.",
    image: service7,
    color: "from-purple-600 to-purple-400",
    pageNumber: 10,
    stats: [
      { value: "300+", label: "Unique Designs" },
      { value: "50+", label: "Global Partners" }
    ]
  },
  {
    title: "Bedsheets Design",
    description: "Transform commercial spaces into inspiring environments that enhance productivity and brand image.",
    image: service8,
    color: "from-emerald-600 to-emerald-400",
    pageNumber: 12,
    stats: [
      { value: "200+", label: "Business Spaces" },
      { value: "95%", label: "Client Retention" }
    ]
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const setCurrentPage = (pageNumber: number) => {
    window.dispatchEvent(new CustomEvent('setPage', { detail: pageNumber }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      viewport={{ once: true }}
      onClick={() => setCurrentPage(service.pageNumber)}
      className="relative group h-[400px] cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {/* Image Container */}
      <div className="w-full h-full overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:opacity-80 transition-all duration-300" />
      </div>

      {/* Title */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] tracking-wide">
          {service.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

const Page3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center mt-20 gap-4 mb-8">
          <div className="w-20 h-[2px] bg-white/30" />
          <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
            Our Services
          </span>
        </div>
        
        <h1 className="font-['Playfair_Display'] text-7xl font-bold text-white mb-12">
          Featured Services
        </h1>
      </motion.div>
      
      <div className="max-w-7.5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Page3;
