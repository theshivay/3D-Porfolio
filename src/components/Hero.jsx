/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I &apos;m <span className='text-[#915eff]'>Shivam Mishra</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' /> interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 flex justify-center items-center w-full'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-certer items-start p-2'>
              <motion.dev
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "loop"
                }}
                className='w-3 h-3 bg-secondary rounded-full mb-1'
              />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero