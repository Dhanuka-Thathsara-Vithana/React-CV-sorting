import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Introducing our cutting-edge job application and recruitment management
        platform tailored exclusively for the IT industry. Our website serves as
        the ultimate hub for both aspiring IT professionals and tech-savvy
        companies alike. Job seekers can effortlessly browse through a myriad of
        IT job listings and submit their applications with ease. What sets us
        apart is our state-of-the-art NLP-powered CV sorting technology, which
        streamlines the recruitment process to ensure that the most qualified
        candidates rise to the top. For IT companies, our platform offers a
        seamless avenue to post job openings, connect with exceptional talent,
        and build dynamic teams. Join us on this transformative journey as we
        redefine the way IT recruitment is done, simplifying the process for all
        stakeholders involved. Welcome to the future of IT recruitment – welcome
        to our platform!
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-neutral-50 text-[20px] max-w-3xl leading-[30px]"
      >
        Explore diverse IT job opportunities like.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
