import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const cursorSize = useMotionValue(32);
  const cursorSpring = useSpring(cursorSize, { damping: 15 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null;

      // Check if cursor is over navigation item
      const isNavItem = 
        target.classList.contains("nav-item") ||
        target.closest(".nav-item") !== null;

      setIsHovered(isClickable);
      setIsNavHovered(isNavItem);
      cursorSize.set(isNavItem ? 80 : isClickable ? 48 : 32);
    };

    const mouseDown = () => {
      cursorSize.set(24);
    };

    const mouseUp = () => {
      cursorSize.set(isNavHovered ? 80 : isHovered ? 48 : 32);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [isHovered, isNavHovered]);

  const variants = {
    default: {
      x: mousePosition.x - cursorSpring.get() / 2,
      y: mousePosition.y - cursorSpring.get() / 2,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 800,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate="default"
        style={{
          width: cursorSpring,
          height: cursorSpring,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="16"
            cy="16"
            r="12"
            stroke="white"
            strokeWidth="1"
            initial={false}
            animate={{
              fill: isNavHovered ? "rgba(255,255,255,0.2)" : isHovered ? "rgba(255,255,255,0.8)" : "transparent",
              strokeWidth: isNavHovered ? 1.5 : 1,
              pathLength: isNavHovered ? 0.6 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="16"
            cy="16"
            r="2"
            fill="white"
            initial={false}
            animate={{
              scale: isNavHovered ? 0.5 : isHovered ? 0.8 : 1
            }}
          />
          {isNavHovered && (
            <motion.path
              d="M16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </svg>
      </motion.div>

      {/* Trailer effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isNavHovered ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 400,
          damping: 20,
        }}
      >
        <div className={`w-2 h-2 bg-white rounded-full ${isNavHovered ? 'opacity-50' : 'opacity-100'}`} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
