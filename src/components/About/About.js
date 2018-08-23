import React from 'react'
import TabHeader from '../TabHeader'
import AboutSection from '../AboutSection'
import Testimonial from '../Testimonial'
import ContactSection from '../ContactSection'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <TabHeader title='About' subtitle='A little more about me' />
        <AboutSection />
        <Testimonial author='Coleman Imhoff' position='Full-Stack Developer' imageSrc='https://media.licdn.com/dms/image/C4E03AQF-gnwXCm8MEw/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=-ig1DchYPGZ4olll8zSJ0_yqvvp5I7x4Zo9JsWDVXW8'>
          I had the pleasure of working and studying side by side with Brevon during our time in the Galvanize Web Development Immersive program. I've always admired his creative ability to solve any problem that he faced. He is one of most talented Full Stack Web Developers I know and I have learned a lot from him.
        </Testimonial>
        <ContactSection />
      </div>
    )
  }
}

export default About
