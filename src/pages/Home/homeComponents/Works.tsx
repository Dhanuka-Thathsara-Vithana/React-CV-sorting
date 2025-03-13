import React from "react";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../styles'

import { SectionWrapper } from '../hoc'
import {projects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion'


const ProjectCard=({index,name,description,tags,image})=>{
return(
  <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
   <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  </motion.div>
)
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Get ready with these above technologies to enhance your employability.</p>
        
        <h2 className={`${styles.sectionHeadText}`}>What we do</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-3 text-Secondary text-[17px] max-w-3xl leading-[30px]"
        >
          CareerCompass, a cutting-edge online recruitment platform, harnesses the power of Natural Language Processing (NLP) for precise CV sorting, revolutionizing the IT job market. Candidates seeking IT roles can seamlessly apply through our platform, while tech-savvy employers in the IT sector can effortlessly post job openings. At CareerCompass, we're dedicated to facilitating a highly efficient and tailored recruitment process, connecting skilled IT professionals with the right opportunities and assisting employers in sourcing top IT talent.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(

          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />

          
        ))}
      </div>
    </>
  )
}

export default SectionWrapper( Works,"")