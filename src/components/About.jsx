import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import React, { useState } from 'react'; // Import useState hook to manage the hover state
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false); // State to keep track of the hover state

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full bg-gradient-to-r from-orange-500 from-10% via-black via-30% to-yellow-500 to-90% ... p-[1px] rounded-[20px] shadow-card'
        whileHover={{ scale: 1.1 }} // Scale up the card on hover
        onHoverStart={() => setIsHovered(true)} // Set the hover state to true when the hover starts
        onHoverEnd={() => setIsHovered(false)} // Set the hover state to false when the hover ends
      >
        <div
          options={{
            max: 45,
            scale: isHovered ? 1.2 : 1.0, // Apply the scale transformation based on the hover state
            speed: 50,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>About Us.</p>
          <h2 className={styles.sectionHeadText}>Who we are?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        PSSTEC is an IT Solutions services provider offering contemporary solutions to meet the client’s business needs by optimizing savings and enhancing ROI. We take pride with our partner company in serving multiple satisfied customers across various sectors i.e. IT, ITES, Education, BFSI, Healthcare, Retail, Hospitality, EPC, Facility Management, Govt Institutions, Manufacturing, and Automotive Industries through our highly skilled & trained resources.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
          {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    
  )
}

export default SectionWrapper(About, "about");
