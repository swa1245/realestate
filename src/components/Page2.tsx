import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface PropertyCard {
  title: string;
  description: string;
  price: string;
  image: string;
  location: string;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
  };
}

const properties: PropertyCard[] = [
  {
    title: "Modern Villa",
    description: "Luxurious 4-bedroom villa with panoramic views",
    price: "$2,500,000",
    image: "./src/assets/img1.webp",
    location: "Beverly Hills",
    specs: {
      beds: 4,
      baths: 5,
      sqft: "4,500"
    }
  },
  {
    title: "Urban Loft",
    description: "Contemporary loft in the heart of downtown",
    price: "$850,000",
    image: "./src/assets/img2.webp",
    location: "Manhattan",
    specs: {
      beds: 2,
      baths: 2,
      sqft: "1,800"
    }
  },
  {
    title: "Seaside Manor",
    description: "Beachfront property with private access",
    price: "$3,200,000",
    image: "./src/assets/img3.webp",
    location: "Malibu",
    specs: {
      beds: 5,
      baths: 6,
      sqft: "5,200"
    }
  },
  {
    title: "Mountain Retreat",
    description: "Cozy cabin with stunning mountain views",
    price: "$1,200,000",
    image: "./src/assets/img4.webp",
    location: "Aspen",
    specs: {
      beds: 3,
      baths: 3,
      sqft: "2,800"
    }
  }
];

const PropertyCard = ({ property }: { property: PropertyCard }) => {
  return (
    <motion.div 
      className="min-w-[700px] h-[85vh] relative rounded-[2rem] overflow-hidden mx-6 flex-shrink-0 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img 
        src={property.image} 
        alt={property.title}
        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
      
      {/* Location Tag */}
      <motion.div 
        className="absolute top-8 left-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="font-['Plus_Jakarta_Sans'] text-white/90">
          {property.location}
        </span>
      </motion.div>

      {/* Price Tag */}
      <motion.div 
        className="absolute top-8 right-8 px-6 py-3 rounded-full bg-white text-black font-['Plus_Jakarta_Sans'] font-bold text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {property.price}
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-['Playfair_Display'] text-5xl font-bold mb-4 text-white">
            {property.title}
          </h3>
          <p className="font-['Plus_Jakarta_Sans'] text-xl mb-6 text-white/80 max-w-xl">
            {property.description}
          </p>
        </motion.div>

        {/* Specs */}
        <motion.div 
          className="flex items-center gap-6 mt-6 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-['Plus_Jakarta_Sans'] text-white/80">
              {property.specs.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-['Plus_Jakarta_Sans'] text-white/80">
              {property.specs.baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="font-['Plus_Jakarta_Sans'] text-white/80">
              {property.specs.sqft} sq.ft
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface Page2Props {
  onScrollEnd: () => void;
}

const Page2 = ({ onScrollEnd }: Page2Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    if (maxScroll - currentScroll < 50 && currentScroll > 0) {
      onScrollEnd();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      handleScroll();
    };

    container.addEventListener('wheel', wheelHandler, { passive: false });
    return () => container.removeEventListener('wheel', wheelHandler);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div 
      className="h-screen w-screen bg-[#111111] relative overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-32 left-20 z-10 max-w-2xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-[2px] bg-white/30" />
          <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
            Our Collection
          </span>
        </div>
        <h1 className="font-['Playfair_Display'] text-7xl font-bold text-white mb-6">
          Featured Properties
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-white/60 text-xl max-w-xl leading-relaxed">
          Discover our handpicked selection of premium properties across the most sought-after locations.
          Each property is carefully selected to meet our exceptional standards.
        </p>
      </motion.div>
      
      {/* Properties Slider */}
      <div 
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ 
          paddingLeft: '45%',
          touchAction: 'pan-x'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        <div className="flex items-center h-full py-10">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-20 z-10 flex items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex flex-col">
          <span className="font-['Plus_Jakarta_Sans'] text-white/40 text-sm uppercase tracking-wider mb-2">
            Discover More
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-white/80">
            Scroll or drag to explore
          </span>
        </div>
        <motion.div 
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
            borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page2;
