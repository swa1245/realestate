import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const navVariants = {
    opened: (deg: string) => ({
      rotate: deg,
    }),
    closed: () => ({
      rotate: 0,
    }),
  };

  const imgVariants = {
    scaleNormal: {
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    scaleDown: {
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleScrollEnd = () => {
    setCurrentPage(prev => Math.min(prev + 1, 5));
  };

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="h-screen w-screen cursor-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />
        <div className="h-screen w-screen bg-[#111111] relative">
          {/* Background and overlay */}
          <motion.img
            src="./src/assets/filters_quality(80).webp"
            alt="background"
            variants={imgVariants}
            animate={open ? "scaleDown" : "scaleNormal"}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-[url('/blueprint-grid.png')] opacity-10"></div>

          {/* Navigation */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <div className="w-full p-6 flex justify-between items-center">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Company Logo - Compass */}
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <div>
                  <h1 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                    LuxeLiving
                  </h1>
                  <p className="text-xs text-white/60 font-['Plus_Jakarta_Sans'] tracking-wider">
                    ELEVATED INTERIORS & DESIGN
                  </p>
                </div>
              </motion.div>
              <div>
                <div
                  className="relative z-50"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <h1 className="font-['Playfair_Display'] text-center text-2xl font-bold text-white cursor-pointer">
                    SHOP BY CATEGORY
                  </h1>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 w-full -translate-x-1/2 mt-2 w-64 bg-gray-100 text-black shadow-lg rounded-lg"
                      >
                        <ul className="py-2 z-50">
                          {["Cushions", "Blankets", "Curtains", "Towels"].map((item) => (
                            <li
                              key={item}
                              className="px-6 py-3 hover:bg-gray-200 transition duration-200 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
              <motion.div
                className="space-y-1.5 cursor-pointer p-2 z-50"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-[30px] h-[2px] bg-white origin-left"
                  variants={navVariants}
                  animate={open ? "opened" : "closed"}
                  custom={"13deg"}
                />
                <motion.div
                  className="w-[30px] h-[2px] bg-white origin-left"
                  variants={navVariants}
                  animate={open ? "opened" : "closed"}
                  custom={"-13deg"}
                />
              </motion.div>
            </div>
          </div>

          {/* Navigation Menu */}
          <AnimatePresence mode="wait">
            {open && <Navbar onClose={toggleMenu} onNavigate={handleNavigate} />}
          </AnimatePresence>

          {/* Main Content */}
          <main className="relative h-full">
            <AnimatePresence mode="wait">
              {currentPage === 1 && (
                <motion.div
                  key="page1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10"
                >
                  <div className="h-screen flex items-center justify-center">
                    <motion.div
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {/* Decorative Elements */}
                      <motion.div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-white/20"
                        animate={{
                          height: [64, 48, 64],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-20 h-[1px] bg-white/20" />
                        <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-sm">
                          Building Tomorrow
                        </span>
                        <div className="w-20 h-[1px] bg-white/20" />
                      </div>
                      <h1 className="font-['Playfair_Display'] text-7xl text-white mb-6">
                        ELEVATED INTERIORS
                      </h1>
                      <h2 className="font-['Playfair_Display'] text-8xl font-bold text-white mb-8">
                        DESIGN
                      </h2>
                      <p className="text-white/60 max-w-2xl mx-auto mb-12 font-['Plus_Jakarta_Sans']">
                        Crafting beautiful and functional spaces that reflect your unique style and elevate everyday living.
                      </p>
                      <motion.button
                        className="px-10 py-5 bg-transparent border-2 border-white text-white font-['Plus_Jakarta_Sans'] 
                                 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        onClick={() => setCurrentPage(2)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore Our Projects
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {currentPage === 2 && (
                <motion.div
                  key="page2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10"
                >
                  <Projects />
                </motion.div>
              )}
              {currentPage === 3 && (
                <motion.div
                  key="page3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10"
                >
                  <Page3 />
                </motion.div>
              )}
              {currentPage === 4 && (
                <motion.div
                  key="page4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10"
                >
                  <About />
                </motion.div>
              )}
              {currentPage === 5 && (
                <motion.div
                  key="page5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10"
                >
                  <Contact />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Page Navigation Dots */}
          <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 space-y-4">
            {[1, 2, 3, 4, 5].map((page) => (
              <motion.div
                key={page}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentPage === page ? 'bg-white' : 'bg-white/30'
                  }`}
                onClick={() => setCurrentPage(page)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: currentPage === page ? 1.2 : 1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default App;
