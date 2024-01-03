/* eslint-disable no-unused-vars */
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl'
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 0.1)}>
        I am a Full Stack Developer with a passion for creating and developing web applications. I have experience in building websites and web applications using JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL. I am a fast learner and a team player who is proficient in an array of scripting languages and multimedia web tools.
      </motion.p>
    </>
  )
}

export default About