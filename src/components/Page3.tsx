import React from 'react'
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const services: Service[] = [
  {
    title: "Property Management",
    description: "Comprehensive property management services including maintenance, tenant screening, and rent collection.",
    icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
    color: "from-emerald-600 to-emerald-400",
    stats: [
      { value: "500+", label: "Properties Managed" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },
  {
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments, market analysis, and portfolio optimization.",
    icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    color: "from-blue-600 to-blue-400",
    stats: [
      { value: "$2B+", label: "Assets Managed" },
      { value: "25%", label: "Avg. ROI" }
    ]
  },
  {
    title: "Interior Design",
    description: "Professional interior design services to transform properties into stunning living spaces.",
    icon: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80",
    color: "from-purple-600 to-purple-400",
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "15+", label: "Design Awards" }
    ]
  },
  {
    title: "Legal Assistance",
    description: "Comprehensive legal support for property transactions, contracts, and documentation.",
    icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80",
    color: "from-red-600 to-red-400",
    stats: [
      { value: "1000+", label: "Cases Handled" },
      { value: "100%", label: "Success Rate" }
    ]
  },
  {
    title: "Home Loans",
    description: "Tailored financing solutions with competitive rates and flexible terms.",
    icon: "https://images.unsplash.com/photo-1580605365717-0a4137b3d511?w=500&q=80",
    color: "from-yellow-500 to-yellow-300",
    stats: [
      { value: "$5B+", label: "Loans Processed" },
      { value: "3.5%", label: "Avg. Interest Rate" }
    ]
  },
  {
    title: "Property Valuation",
    description: "Accurate property valuations using advanced market analysis tools.",
    icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
    color: "from-pink-600 to-pink-400",
    stats: [
      { value: "5000+", label: "Properties Valued" },
      { value: "99%", label: "Accuracy Rate" }
    ]
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative h-screen overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-sm">
        <div className="aspect-[4/5] relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br bg-opacity-80 z-10"
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`,
              opacity: 0.1
            }}
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium mb-4`}>
              {service.title}
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-white/80 text-base leading-relaxed transform-gpu transition-all duration-300 group-hover:text-white">
              {service.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="font-['Playfair_Display'] text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Page3 = () => {
  return (
    <div className="min-h-screen w-screen bg-[#111111] relative overflow-y-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] fixed" />
      
      <div className="relative px-20 mt-10 py-24 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-[2px] bg-white/30" />
            <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
              What We Offer
            </span>
            <div className="w-20 h-[2px] bg-white/30" />
          </div>
          
          <h1 className="font-['Playfair_Display'] text-7xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your needs. Discover our range of premium services 
            designed to make your property journey seamless and exceptional.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pb-12"
        >
          <motion.button 
            className="px-10 py-5 bg-gradient-to-r from-white to-gray-200 text-black font-['Plus_Jakarta_Sans'] font-semibold rounded-full 
                     hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105"
            whileHover={{ boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Page3;
