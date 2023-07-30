import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, description, }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
          <h3 className='text-white text-[10px] font-bold text-center'>
              {description}
          </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        As a skilled and driven computer science student, I have a solid foundation in essential subjects like Data Structures and Algorithms, Database Management System, Operating Systems, and Algorithm Design. Proficient in C++, C, Python, and Java, I leverage my programming knowledge to work with modern web technologies such as React, Next.js, Node.js, and MongoDB. These technologies allow me to build dynamic and responsive web applications, utilizing the power of front-end frameworks, server-side rendering, and NoSQL databases. With a passion for software development and a focus on innovative projects, I aim to make meaningful contributions to the industry using these cutting-edge technologies.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
    
  )
}

export default SectionWrapper(About, "about");