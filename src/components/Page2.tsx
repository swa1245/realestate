import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface PropertyCard {
  title: string;
  description: string;
  price: string;
  image: string;
  location: string;
  video?: string;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
  };
  features: string[];
  style: string;
}

const properties: PropertyCard[] = [
  {
    title: "Modern Villa",
    description: "Experience luxury living at its finest with this stunning contemporary villa featuring panoramic views, smart home integration, and premium finishes throughout.",
    price: "$2,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-walking-through-a-modern-house-5244/1080p.mp4",
    location: "Beverly Hills",
    specs: {
      beds: 4,
      baths: 5,
      sqft: "4,500"
    },
    features: ["Smart Home System", "Infinity Pool", "Wine Cellar", "Home Theater"],
    style: "Contemporary"
  },
  {
    title: "Urban Loft",
    description: "Sophisticated urban living meets industrial chic in this meticulously designed loft featuring exposed brick walls, soaring ceilings, and premium appliances.",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    location: "Manhattan",
    specs: {
      beds: 2,
      baths: 2,
      sqft: "1,800"
    },
    features: ["High Ceilings", "Custom Kitchen", "City Views", "Private Terrace"],
    style: "Industrial"
  },
  {
    title: "Seaside Manor",
    description: "Indulge in coastal luxury with this breathtaking beachfront estate offering private beach access, panoramic ocean views, and resort-style amenities.",
    price: "$3,200,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-modern-living-room-with-window-4599/1080p.mp4",
    location: "Malibu",
    specs: {
      beds: 5,
      baths: 6,
      sqft: "5,200"
    },
    features: ["Private Beach", "Outdoor Kitchen", "Guest House", "Spa"],
    style: "Mediterranean"
  },
  {
    title: "Zen Garden Residence",
    description: "A harmonious blend of indoor and outdoor living, this Japanese-inspired residence offers tranquil gardens, meditation spaces, and minimalist design elements.",
    price: "$4,100,000",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    location: "Kyoto",
    specs: {
      beds: 4,
      baths: 4,
      sqft: "3,800"
    },
    features: ["Meditation Room", "Koi Pond", "Tea House", "Bamboo Garden"],
    style: "Japanese Modern"
  },
  {
    title: "Parisian Penthouse",
    description: "Exquisite Haussmanian-style apartment combining classic French architecture with contemporary luxury, featuring ornate moldings and Eiffel Tower views.",
    price: "$5,800,000",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    location: "Paris",
    specs: {
      beds: 3,
      baths: 3,
      sqft: "2,900"
    },
    features: ["Period Details", "Wine Room", "Library", "Terrace"],
    style: "French Classical"
  },
  {
    title: "Nordic Haven",
    description: "Embrace Scandinavian design principles in this light-filled home featuring clean lines, natural materials, and seamless indoor-outdoor living spaces.",
    price: "$1,950,000",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
    location: "Stockholm",
    specs: {
      beds: 3,
      baths: 2,
      sqft: "2,200"
    },
    features: ["Sauna", "Fireplace", "Garden Studio", "Eco-Friendly"],
    style: "Scandinavian"
  },
  {
    title: "Dubai Sky Palace",
    description: "Ultra-luxury sky residence offering panoramic city views, smart automation throughout, and world-class amenities in the heart of Dubai.",
    price: "$7,500,000",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-luxury-apartment-interior-2741/1080p.mp4",
    location: "Dubai",
    specs: {
      beds: 5,
      baths: 7,
      sqft: "8,500"
    },
    features: ["Private Elevator", "Smart Home", "Indoor Pool", "Cinema"],
    style: "Modern Luxury"
  },
  {
    title: "Tuscan Villa",
    description: "Authentic Italian villa set among rolling hills, featuring hand-painted frescoes, vintage wine cellar, and classic Mediterranean architecture.",
    price: "$4,800,000",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    location: "Florence",
    specs: {
      beds: 6,
      baths: 5,
      sqft: "6,200"
    },
    features: ["Olive Grove", "Wine Cellar", "Pizza Oven", "Pool"],
    style: "Italian Classical"
  }
];

const PropertyCard = ({ property, index }: { property: PropertyCard; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {property.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={property.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <motion.img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Details */}
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1 }}
                  className="h-1 bg-white mb-6"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/60 uppercase tracking-wider text-sm"
                >
                  {property.style} Style
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-['Playfair_Display'] text-white mt-2"
                >
                  {property.title}
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg max-w-xl"
              >
                {property.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-8 text-white/80"
              >
                <div>
                  <span className="block text-3xl font-bold">{property.specs.beds}</span>
                  <span className="text-sm">Bedrooms</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold">{property.specs.baths}</span>
                  <span className="text-sm">Bathrooms</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold">{property.specs.sqft}</span>
                  <span className="text-sm">Square Feet</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {property.features.map((feature, i) => (
                  <span
                    key={feature}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6"
              >
                <span className="text-4xl font-['Playfair_Display'] text-white">
                  {property.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  View Property
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Location */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white font-medium">{property.location}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface Page2Props {
  onScrollEnd?: () => void;
}

const Page2 = ({ onScrollEnd }: Page2Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Progress bar animation
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-[#111111]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Property Cards */}
      <div className="relative">
        {properties.map((property, index) => (
          <PropertyCard key={property.title} property={property} index={index} />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 space-y-4">
        {properties.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeIndex === index ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => {
              const element = document.querySelectorAll('.property-card')[index];
              element?.scrollIntoView({ behavior: 'smooth' });
              setActiveIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: activeIndex === index ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page2;
