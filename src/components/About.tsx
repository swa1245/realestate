import { motion } from "framer-motion";

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "200+", label: "Projects Completed" },
  { number: "50+", label: "Professional Engineers" },
  { number: "15", label: "International Awards" }
];

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#111111] relative py-24">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://player.vimeo.com/external/477743905.hd.mp4?s=e46a33e4b74e55e5b69a4df7e87ff69f1a0f5f24&profile_id=174" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center mt-20 gap-4 mb-8">
            <div className="w-20 h-[2px] bg-white/30" />
            <span className="text-white/60 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
              About Us
            </span>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-['Playfair_Display'] text-6xl font-bold text-white mb-8"
              >
                Building Dreams,<br />
                Engineering Reality
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Since 2000, StructuraVision has been at the forefront of innovative civil engineering and architectural design. 
                Our team of expert engineers and architects combines technical excellence with creative vision to deliver 
                exceptional results for our clients.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/70 text-lg leading-relaxed"
              >
                We specialize in sustainable design, cutting-edge construction technologies, and smart infrastructure solutions 
                that shape the future of urban development.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.2) }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                >
                  <h3 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/60 font-['Plus_Jakarta_Sans']">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-32"
          >
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-12 text-center">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {[
                { name: "John Smith", role: "Chief Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
                { name: "Sarah Johnson", role: "Design Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
                { name: "Michael Chen", role: "Technical Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
                { name: "Emma Davis", role: "Project Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/60 font-['Plus_Jakarta_Sans'] text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
