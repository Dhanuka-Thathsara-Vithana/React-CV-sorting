import { Box } from '@mui/material'
import './home.css'
import { About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Tech, Works } from './homeComponents'

function Home() {
  return (
    <Box 
      sx={{
        width: '100%',
        minWidth: '100%',
        margin: '0 auto',

        overflow: 'hidden'
      }}
    >   
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Box>
  )
}

export default Home