import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        onLoadingComplete();
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  const blueprintLines = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute h-[1px] bg-blue-400/30"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 1.5,
        delay: i * 0.1,
        ease: "easeInOut"
      }}
      style={{
        top: `${(i + 1) * 5}%`,
        left: 0,
        right: 0,
      }}
    />
  ));

  const verticalLines = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-[1px] bg-blue-400/30"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 1.5,
        delay: i * 0.1,
        ease: "easeInOut"
      }}
      style={{
        left: `${(i + 1) * 5}%`,
        top: 0,
        bottom: 0,
      }}
    />
  ));

  return (
    <motion.div
      className="fixed inset-0 bg-[#111111] z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Blueprint Grid */}
      {blueprintLines}
      {verticalLines}

      <div className="relative">
        {/* Compass Animation */}
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-32 h-32"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg className="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Main Logo */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="font-['Playfair_Display'] text-6xl font-bold text-white mb-4">
            StructuraVision
          </h1>
          <p className="text-blue-400/80 font-['Plus_Jakarta_Sans'] tracking-wider">
            ENGINEERING & ARCHITECTURE
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative w-[300px]">
          <div className="h-[2px] w-full bg-white/10">
            <motion.div
              className="h-full bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.div
            className="absolute -right-8 -top-3 text-sm text-blue-400/80 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 45, 90, 135].map((rotation, i) => (
            <motion.div
              key={rotation}
              className="absolute w-[400px] h-[1px] bg-blue-400/20 origin-center"
              initial={{ rotate: rotation, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              style={{ rotate: `${rotation}deg` }}
            />
          ))}
        </div>

        {/* Measurement Lines */}
        <div className="absolute -left-20 top-0 bottom-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 1.5 }}
            >
              <div className="w-4 h-[1px] bg-blue-400/50" />
              <span className="text-xs text-blue-400/50 font-mono">
                {(4 - i) * 25}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
