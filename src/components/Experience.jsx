import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Update ExperienceCard component
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#204060", // Use a dark blue color for the content background
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            iconStyle={{ background: "#2A4365" }} // Use a slightly lighter blue for the icon background
            icon={<div className="flex justify-center items-center w-full h-full">{experience.counter}</div>}
        >
            <div>
                <h3 className="text-white text-2xl font-bold text-center mb-2">{experience.title}</h3>
            </div>

            <ul className="mt-2 list-disc ml-5 space-y-2" style={{ listStyleType: "none" }}>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-secondary text-lg pl-1">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

// Update Experience component
const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>How we map out a client-oriented solution</p>
                <h2 className={`${styles.sectionHeadText} text-center text-4xl font-bold mt-4`}>Steps</h2>
            </motion.div>

            <div className="mt-20 flex flex-col items-center">
                <VerticalTimeline layout="1-column">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "");
