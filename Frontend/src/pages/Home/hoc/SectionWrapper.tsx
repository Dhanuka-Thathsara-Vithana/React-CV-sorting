import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { FC, ComponentType } from 'react';

// Define the HOC function type with proper TypeScript annotations
const SectionWrapper = (Component: ComponentType, idName: string): FC => {
  // Define the returned HOC component
  const HOC: FC = () => {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;