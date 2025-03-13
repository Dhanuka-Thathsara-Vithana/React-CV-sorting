import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Box } from '@mui/material';
import { Fullscreen, FullscreenTwoTone } from '@mui/icons-material';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome <span className='text-[#915eff]'>to CareerCompass</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Where Advanced NLP Fuels Smarter CV Analysis, Seamless Job
            <br className='sm:block-hidden' /> Applications, and Effortless Job Postings. Empower Your Recruitment Process Today.
          </p>
        </div>
      </div>

      {/* ComputersCanvas Component */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '60%', transform: 'translateY(-50%)' }}>
        <div style={{ width: '90%', height: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '100%' }}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              style={{ marginTop: '10px' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;