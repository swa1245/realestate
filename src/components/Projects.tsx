import { motion } from "framer-motion";
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
}

const projects: Project[] = [
  {
    title: "Luxury Penthouse",
    description: "A modern penthouse with panoramic city views and smart lighting.",
    image: img1,
    category: "Residential",
    year: "2024",
  },
  {
    title: "Minimalist Office",
    description: "A sleek office space with warm lighting and natural textures.",
    image: img2,
    category: "Commercial",
    year: "2023",
  },
  {
    title: "Boutique Hotel Suite",
    description: "A sophisticated suite with marble details and cozy ambiance.",
    image: img3,
    category: "Hospitality",
    year: "2023",
  },
  {
    title: "Scandinavian Living Room",
    description: "A serene and spacious living room with organic textures.",
    image: img4,
    category: "Residential",
    year: "2024",
  },
  {
    title: "Industrial Loft",
    description: "A stylish loft with raw textures and an open-concept design.",
    image: img5,
    category: "Residential",
    year: "2023",
  },
  {
    title: "Art Deco Office",
    description: "A modern office with bold geometric shapes and vintage charm.",
    image: img6,
    category: "Commercial",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] relative py-24 px-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
        <div className="flex items-center mt-20 gap-4 mb-8">
          <div className="w-20 h-[2px] bg-white/30" />
          <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
            Our Creations
          </span>
        </div>

        <h1 className="font-['Playfair_Display'] text-7xl font-bold text-white mb-12">Interior Designs</h1>

        <div className="grid grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-[#1A1A1A] shadow-xl transition-all duration-500"
            >
              {/* Image with Soft Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-[600px] h-[500px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Project Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-black/50 backdrop-blur-md rounded-b-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm">
                    {project.category}
                  </span>
                  <span className="text-white/70 text-sm">{project.year}</span>
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-2">{project.title}</h3>

                <p className="text-white/80 font-['Plus_Jakarta_Sans'] opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
