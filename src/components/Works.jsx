import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { service } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({
                         index,
                         name,
                         description,
                         image,
                         serviceId, // Assuming you have a unique projectId for each project
                     }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-white p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5'>
                    <h3 className='text-orange-600 font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-black text-[14px]'>{description}</p>
                </div>

                {/* Button linking to the specific project page */}
                <div className='flex justify-center mt-4'>
                    <Link to={`/services/${serviceId}`}>
                        <button className='custom-button'>Learn More</button>
                    </Link>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Services = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>What we provide</p>
                <h2 className={`${styles.sectionHeadText}`}>Services</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {service.map((project, index) => (
                    <ServiceCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Services, 'work');
