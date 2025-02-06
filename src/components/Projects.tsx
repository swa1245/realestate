import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import img1 from "../assets/projects/1.jpg";
import img2 from "../assets/projects/2.jpg";
import img3 from "../assets/projects/3.jpg";
import img4 from "../assets/projects/4.jpg";
import img5 from "../assets/projects/5.jpg";
import img6 from "../assets/projects/6.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Luxury Penthouse",
    description: "A modern penthouse with panoramic city views and smart lighting.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Residential",
    year: "2024",
    video: "https://player.vimeo.com/video/428284026?background=1"
  },
  {
    title: "Minimalist Office",
    description: "A sleek office space with warm lighting and natural textures.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    category: "Commercial",
    year: "2023"
  },
  {
    title: "Boutique Hotel Suite",
    description: "A sophisticated suite with marble details and cozy ambiance.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop",
    category: "Hospitality",
    year: "2023",
    video: "https://player.vimeo.com/video/428284025?background=1"
  },
  {
    title: "Scandinavian Living Room",
    description: "A serene and spacious living room with organic textures.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop",
    category: "Residential",
    year: "2024"
  },
  {
    title: "Industrial Loft",
    description: "A stylish loft with raw textures and an open-concept design.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop",
    category: "Residential",
    year: "2023"
  },
  {
    title: "Modern Kitchen",
    description: "A contemporary kitchen with smart appliances and elegant finishes.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2053&auto=format&fit=crop",
    category: "Residential",
    year: "2024"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
      className="group relative w-full h-[80vh] overflow-hidden rounded-3xl"
    >
      {project.video ? (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={project.video}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="text-white/60 text-sm tracking-wider">{project.category}</span>
          </div>
          <h3 className="text-4xl font-['Playfair_Display'] text-white">{project.title}</h3>
          <p className="text-white/70 max-w-lg">{project.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full
                     hover:bg-white hover:text-black transition-all duration-300"
          >
            View Project
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const categories = ["All", "Residential", "Commercial", "Hospitality"];
  const filteredProjects = projects.filter(
    project => filter === "All" || project.category === filter
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#111111] py-20 px-6 md:px-10">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-6xl md:text-7xl font-['Playfair_Display'] text-white">Our Projects</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our portfolio of meticulously crafted spaces that blend aesthetics with functionality.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
