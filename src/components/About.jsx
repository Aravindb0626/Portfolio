import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPostman } from "react-icons/si";


    const skills = [
        { name : "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 text-3xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-3xl" /> },
    ]

    const TiltCard = ({ children }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setStyle({ transform: `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)` });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) scale(1)" });
  };
  
  return (
    <div
      className="transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
};
  


export default function About() {
    return (
       <section id='about' className=" bg-rose-50 text-gray-900 py-20 px-6 md:px-20">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-orange-500 font-semibold text-lg">Services</p> */}
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 relative inline-block">
            <span className="relative">
              My specialties
              <span className="absolute -left-3 top-3 w-10 h-10 bg-yellow-300 rounded-full -z-10"></span>
            </span>
          </h2>
          <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-5 text-base leading-relaxed"
        >
          I specialize in building modern, responsive web applications using the MERN stack (MongoDB, Express, React, Node.js).
My focus is on creating seamless user experiences, scalable backend systems, and clean, maintainable code that drives real business results..
        </motion.p>
        </motion.div>

        
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center justify-between cursor-pointer border border-transparent hover:border-yellow-400 hover:shadow-[0_0_15px_#facc15] transition-all duration-300">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                {/* <a href="#" className="text-gray-400 text-xl">
                  ↗
                </a> */}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
    )
}
