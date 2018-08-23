import React from 'react'
import PreviewAbout from '../PreviewAbout'
// import CapstoneSection from '../CapstoneSection'
import ProjectSection from '../ProjectSection'
import Testimonial from '../Testimonial'
import ContactSection from '../ContactSection'
import SkillsSection from '../SkillsSection'
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <PreviewAbout />
        {/* <CapstoneSection /> */}
        <ProjectSection className='featured-project' title='Pay Me Connor'  imageSrc='https://media.giphy.com/media/XoywQKznL9QaQlnaY8/giphy.gif' direction='left' repoLink='https://github.com/Pleeper228/pay-me-connor-client'>
          Pay Me Connor is a mobile app that allows users to track bills and payments between roommates. As a user you can add as many roommates and bills as you need. You can add payment records, and you can see a log of all payments made as well as a running total of all bill balances.
          <ul className='project-list-container'>
            <li className='project-list-item'>
              <img className='svg' src='./phone.svg' alt='' />
              <p className='project-list-text'>Built in React Native</p>
            </li>
            <li className='project-list-item'>
              <img className='svg' src='./server.svg' alt='' />
              <p className='project-list-text'>Express server hosted on Heroku</p>
            </li>
            <li className='project-list-item'>
              <img className='svg' src='./database.svg' alt='' />
              <p className='project-list-text'>PostgreSQL database</p>
            </li>
          </ul>
        </ProjectSection>
        <Testimonial author='Alyssa Ebert' position='Full-Stack Developer' imageSrc='https://media.licdn.com/dms/image/C5603AQEiYaoN439kFA/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=lATJrMGB7w3-bzERj1lhASY9zFmRdL0x-MsNy3UCz1A'>
          Brevon Good is a very skilled and knowledgable developer. He brings a sense of humor and creativity to every problem he encounters. Brevon has a natural instinct for fostering community and learning, and is very willing to dedicate time to helping his peers problem solve. I would highly recommend working with Brevon.
        </Testimonial>
        <SkillsSection />
        <Testimonial author='Coleman Imhoff' position='Full-Stack Developer' imageSrc='https://media.licdn.com/dms/image/C4E03AQF-gnwXCm8MEw/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=-ig1DchYPGZ4olll8zSJ0_yqvvp5I7x4Zo9JsWDVXW8'>
          I had the pleasure of working and studying side by side with Brevon during our time in the Galvanize Web Development Immersive program. I've always admired his creative ability to solve any problem that he faced. He is one of most talented Full Stack Web Developers I know and I have learned a lot from him.
        </Testimonial>
        <ContactSection />
      </div>
    )
  }
}

export default Home
