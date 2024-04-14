import ContactCard from "./contactCard"
import ContactParallax from "./ContactParallex"

const Contact = () => {
  return (
    <div id="contact" className='relative h-full bg-neutral'>
        <ContactParallax/>
          <ContactCard/>
    </div>
  )
}

export default Contact