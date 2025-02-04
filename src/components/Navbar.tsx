import { motion } from "framer-motion";
import React from "react";

interface NavbarProps {
  onClose: () => void;
  onNavigate: (page: number) => void;
}

const navItems = [
  { title: "Home", page: 1 },
  { title: "Projects", page: 2 },
  { title: "Services", page: 3 },
  { title: "About", page: 4 },
  { title: "Contact", page: 5 }
];

const Navbar: React.FC<NavbarProps> = ({ onClose, onNavigate }) => {
  // Strip animation for background
  const stripVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    animate: (i: number) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 0.5,
        delay: i * 0.02,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
    exit: (i: number) => ({
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      transition: {
        duration: 0.5,
        delay: i * 0.02,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
  };

  // Content animation
  const contentVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + (i * 0.1),
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
  };

  const handleNavigation = (page: number) => {
    onClose();
    setTimeout(() => onNavigate(page), 1000);
  };

  return (
    <motion.div 
      className="fixed inset-0 w-screen h-screen overflow-hidden z-50"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background strips */}
      <div className="absolute inset-0 grid grid-cols-20 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full bg-black/95 backdrop-blur-md"
            variants={stripVariants}
            custom={i}
          />
        ))}
      </div>

      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="nav-item absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center"
        variants={contentVariants}
        custom={0}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45 transform -translate-y-1/2" />
        </div>
      </motion.button>

      {/* Content */}
      <div className="relative w-full h-full flex">
        {/* Navigation Links */}
        <div className="w-2/3 h-full flex items-center pl-20">
          <nav>
            <ul className="space-y-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={contentVariants}
                  custom={i}
                  className="overflow-hidden"
                >
                  <motion.button
                    onClick={() => handleNavigation(item.page)}
                    className="nav-item font-['Playfair_Display'] text-[5rem] text-white hover:text-gray-300 transition-colors block relative group"
                    whileHover="hover"
                  >
                    <motion.span
                      className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: {
                          scaleX: 1,
                          transition: { duration: 0.3 }
                        }
                      }}
                    />
                    {item.title}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Info Section */}
        <div className="w-1/3 h-full flex flex-col justify-center pr-20">
          <motion.div
            variants={contentVariants}
            custom={5}
            className="mb-12"
          >
            <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">
              Contact Us
            </h3>
            <motion.a 
              href="mailto:info@structuravision.com"
              className="nav-item text-white/60 hover:text-white transition-colors text-lg block mb-2"
              whileHover={{ x: 10 }}
            >
              info@structuravision.com
            </motion.a>
            <motion.a 
              href="tel:+15551234567"
              className="nav-item text-white/60 hover:text-white transition-colors text-lg block"
              whileHover={{ x: 10 }}
            >
              +1 (555) 123-4567
            </motion.a>
          </motion.div>

          <motion.div
            variants={contentVariants}
            custom={6}
            className="mb-12"
          >
            <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">
              Visit Us
            </h3>
            <motion.a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item text-white/60 hover:text-white transition-colors text-lg block group"
              whileHover={{ x: 10 }}
            >
              123 Innovation Street
              <br />
              Silicon Valley, CA 94025
              <motion.div
                className="h-[1px] bg-white/30 mt-1"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            variants={contentVariants}
            custom={7}
            className="space-y-6"
          >
            <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              {["LinkedIn", "Instagram", "Twitter"].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  className="nav-item text-white/60 hover:text-white transition-colors text-lg relative group"
                  whileHover={{ y: -2 }}
                >
                  <span>{social}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Navbar;
