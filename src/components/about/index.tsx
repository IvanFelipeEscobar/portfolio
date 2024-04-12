import AboutContent from './aboutContent'
import AboutParallax from './aboutParallax'

const About = () => {
  return (
    <div id="about" className='h-full bg-primary'> 
    <AboutParallax/>
   <AboutContent/>
    </div>
  )
}

export default About