import './home.css'
import { About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Tech, Works } from './homeComponents'

function Home() {
  return (
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero/>
    </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
    <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
    </div>
    </div>
  )
}

export default Home