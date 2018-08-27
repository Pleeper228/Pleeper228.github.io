import React from 'react'
import TabHeader from '../TabHeader'
import ProjectSection from '../ProjectSection'
import Testimonial from '../Testimonial'
import ContactSection from '../ContactSection'
import './projects.css'

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <TabHeader title='Projects' subtitle='Some of my recent works'/>
        <ProjectSection title='Pay Me Connor'  imageSrc='https://media.giphy.com/media/yvXfCrSYDs0wanhe9i/giphy.gif' direction='left' repoLink='https://github.com/Pleeper228/pay-me-connor-client' mobile={true}>
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
        <ProjectSection title='Dumpr' direction='right' imageSrc='./dumpr.png' repoLink='https://github.com/Pleeper228/dumpr-client' liveLink='https://dumpr-client.herokuapp.com/' web={true}>
          Dumpr is an app that lets users add the locations of bathrooms and rate their quality. Think Yelp for bathrooms.
          <ul className='project-list-container'>
            <li className='project-list-item'>
              <img className='svg' src='./desktop.svg' alt='' />
              <p className='project-list-text'>Built in React</p>
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
        <ProjectSection title='Urban Canvas' direction='left' imageSrc='./urban-canvas.png' web={true} repoLink='https://github.com/NicholasMunson/UrbanCanvas' liveLink='https://urban-canvas-client.herokuapp.com/'>
          Urban Canvas is a web app that allows users to document local outdoor art installations, and view all art installations to find local art near you.
          <ul className='project-list-container'>
            <li className='project-list-item'>
              <img className='svg' src='./desktop.svg' alt='' />
              <p className='project-list-text'>Built in React</p>
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
        <ContactSection />
      </div>
    )
  }
}

export default Projects
