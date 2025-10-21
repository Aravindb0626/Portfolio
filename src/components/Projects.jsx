import React from 'react'
import { FaRocket } from "react-icons/fa";
import project1Img from '../assets/projects.1.png'
import project2Img from '../assets/projects.2.png'
import project3Img from '../assets/projects.3.png'


import {motion} from 'framer-motion'

const Projects = () => {

    const projects = [
        { img : project1Img, title : "Model Portfolio Template", category : "Website / e-Commerce" },
        { img : project2Img, title : "Real Estate Mobile Application", category : "Mobile Application" },
        { img : project3Img, title : "Model Portfolio Template", category : "Website / e-Commerce" },
    ]

    const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  return (
     <section
      id="projects"
      className=" bg-rose-50 text-gray-900 py-20 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-3xl text-center md:text-left mx-auto md:mx-0"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My Work Experience
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
          I’ve worked on diverse projects across web development, building websites and web applications that are both functional and visually appealing. My focus is on delivering modern, efficient, and intuitive user experiences.
        </p>
      </motion.div>

      {/* Floating Rocket Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden sm:block absolute top-10 right-10 bg-yellow-500/10 p-6 rounded-full"
      >
        <FaRocket className="text-yellow-400 text-4xl" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-14 sm:mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: index * 0.15 }}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-[0_0_20px_#facc15] transition-all duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 sm:h-64  md:h-72 object-cover"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl text-white font-bold mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
