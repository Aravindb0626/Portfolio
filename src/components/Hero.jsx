import React from "react";
import { motion } from "framer-motion";
import img from "../assets/me.jpeg";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-rose-50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="text-red-500 font-semibold text-lg mb-2">
            Hi there, I'm Aravind
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Full Stack Developer
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            As a Full-Stack Developer, I create high-performance web applications that combine elegant design with reliable functionality. I’m driven by a passion for problem-solving, scalability, and delivering seamless user experiences that make an impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 text-base font-medium shadow-md transition"
            >
              Learn more
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-semibold inline-flex items-center gap-1 text-gray-900 hover:text-red-500 transition"
            >
              See my work <span className="text-xl">↗</span>
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-rose-300 overflow-hidden shadow-xl">
            <img
              src={img}
              alt="Aravind"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
