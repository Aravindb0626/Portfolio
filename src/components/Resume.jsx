import React from 'react'
import {motion} from 'framer-motion'

const Resume = () => {
    const education = [
        {
            year : 2024,
            title : "Master's Degree in Computer Application",
            place : "Periyar University",
            desc : "My Master’s degree at Periyar University was a transformative journey that honed my technical expertise and creative thinking. It allowed me to explore the intersection of design, functionality, and performance in web applications."
        },
        {
            year : 2022,
            title : "Bachelor's Degree in Computer Application",
            place : "PRIST University",
            desc : "My Bachelor’s degree at PRIST University laid the foundation for my journey in software development. I gained a solid understanding of programming principles, data structures, and system design, which sparked my passion for creating innovative and efficient web solutions."
        }
    ]

    const experience = [
        {
            year : 2025,
            title : "Fullstack internship in web developement",
            place : "Chola Business Automation Private Limited",
            desc : "The internship at Chola Business Automation was a turning point in my career — transforming my classroom knowledge into practical solutions. I contributed to real client projects, learned the importance of clean code, and grew confident in handling end-to-end web development tasks."
        }
    ]

    const fadeInUp = {
        hidden : { opacity : 0, y: 30},
        visible : {opacity : 1, y: 0, transition : { duration : 0.6}}
    }
  return (

    <section id="resume" className="bg-[#111] text-white py-24 px-6 md:px-20">
        <motion.div 
        initial = "hidden"
        whileInView="visible"
        viewport={{once : true}}
        variants={fadeInUp}>
      <h2 className="text-center text-4xl font-bold">Resume</h2>
      <p className="text-center text-gray-400 mt-2">
        Every step of my journey has been a learning experience — from mastering the foundations of computer applications to applying those skills in real-world development. My education and work experience together fuel my passion for creating smart, efficient, and visually engaging digital solutions.
      </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 mt-16">
        {/* Education */}
        <motion.div
        initial = "hidden"
        whileInView="visible"
        viewport={{once : true}}
        variants={fadeInUp}>
          <h3 className="text-3xl font-semibold mb-6 border-b border-gray-600 inline-block pb-2">
            Education
          </h3>
          {education.map((item, index) => (
            <motion.div key={index} 
            initial = "hidden"
            whileInView="visible"
            viewport={{once : true}}
            variants={fadeInUp}
            transition={{delay: index * 0.7}}
            className="mb-10">
              <h4 className="text-xl font-bold">{item.place}</h4>
              <div className="flex items-center mt-2">
                <span className="border border-yellow-500 text-yellow-500 px-3 py-1 text-sm mr-2">
                  {item.year}
                </span>
                <p className="font-medium">{item.title}</p>
              </div>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once : true}}
        variants={fadeInUp}>
          <h3 className="text-3xl font-semibold mb-6 border-b border-gray-600 inline-block pb-2">
            Experience
          </h3>
          {experience.map((item, index) => (
            <motion.div key={index} 
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            variants={fadeInUp}
            transition={{delay : index* 0.7}}
            className="mb-10">
              <h4 className="text-xl font-bold">{item.place}</h4>
              <div className="flex items-center mt-2">
                <span className="border border-yellow-500 text-yellow-500 px-3 py-1 text-sm mr-2">
                  {item.year}
                </span>
                <p className="font-medium">{item.title}</p>
              </div>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
