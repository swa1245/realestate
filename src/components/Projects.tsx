import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Modern Skyscraper",
    description: "A 50-story commercial building with sustainable design features",
    image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&q=80",
    category: "Commercial",
    year: "2024"
  },
  {
    title: "Eco Bridge",
    description: "Sustainable bridge design with innovative materials",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    category: "Infrastructure",
    year: "2023"
  },
  {
    title: "Green Campus",
    description: "University campus with LEED certification",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    category: "Educational",
    year: "2023"
  },
  {
    title: "Smart Hospital",
    description: "State-of-the-art medical facility with modular design",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    category: "Healthcare",
    year: "2024"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-[#111111] relative py-24 px-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex items-center mt-20 gap-4 mb-8">
          <div className="w-20 h-[2px] bg-white/30" />
          <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
            Our Work
          </span>
        </div>
        
        <h1 className="font-['Playfair_Display'] text-7xl font-bold text-white mb-12">
          Featured Projects
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm">
                    {project.category}
                  </span>
                  <span className="text-white/60 text-sm">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 font-['Plus_Jakarta_Sans'] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
