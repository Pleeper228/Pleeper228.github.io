import React from 'react'
import TabHeader from '../TabHeader'
import ExperienceSection from '../ExperienceSection'
import Testimonial from '../Testimonial'
import ContactSection from '../ContactSection'
import './resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        <TabHeader title='Resumé' subtitle='Work experience, education and tech used' />
        <div className='resume-container inner-section wrapper'>
          <div className='resume-column-container'>
            <div className='resume-column'>
              <div className=''>
                <h2 className='resume-header'>Technical Skills</h2>
                <ExperienceSection>
                  <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>GitHub</li>
                    <li>Angular 6</li>
                    <li>Django</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Cypress</li>
                    <li>Mocha</li>
                    <li>Node</li>
                    <li>React Native</li>
                  </ul>
                </ExperienceSection>
              </div>

              <div className=''>
                <h2 className='resume-header'>Personal Skills</h2>
                <ExperienceSection>
                  <ul>
                    <li>Creative Spirit</li>
                    <li>Reliable and Professional</li>
                    <li>Adaptable and Flexible</li>
                    <li>Agile Workflow</li>
                    <li>Team Player</li>
                    <li>Fast Learner</li>
                    <li>Motivated</li>
                  </ul>
                </ExperienceSection>
              </div>
              <div className=''>
                <h2 className='resume-header'>Links</h2>
                <ExperienceSection title='GitHub'>
                  <a href='https://github.com/pleeper228'>GitHub.com/Pleeper228</a>
                </ExperienceSection>
                <ExperienceSection title='LinkedIn'>
                  <a href='https://linkedin.com/in/brevon'>LinkedIn.com/in/Brevon</a>
                </ExperienceSection>
              </div>
            </div>

            <div className='resume-column'>
              <div className=''>
                <h2 className='resume-header'>Education</h2>
                <ExperienceSection title='Galvanize Inc' subtitle="Web Development | Feb 2018 - Aug 2018" imageSrc='./galvanize.jpg'>
                  Galvanize is the recognized leader in technology education with a focus in software development, data science and data engineering. They have a world-renowned team of experienced, full-time instructional faculty with decades of experience among them.
                </ExperienceSection>
                <ExperienceSection title='University of Colorado Denver' subtitle="Recording Arts Technology | Sep 2011 - May 2015" imageSrc='./denver.jpg'>
                  The University of Colorado Denver | Anschutz Medical Campus is one of the nation’s top public urban research universities. Their impact—on individuals, on Colorado and on the world—is profound, whether they're conducting game-changing research or helping students learn with purpose.
                </ExperienceSection>
                <ExperienceSection title='University of Colorado Boulder' subtitle="Sep 2010 - May 2011" imageSrc='./boulder.jpg'>
                  <ul>
                    <li>Coordinated events, running audio, lighting, and production including two seasons on the production team at the Denver Botanic Gardens</li>
                    <li>Assisted on 30+ recordings, some of which are featured on the Moth Story Slam podcast sponsored by NPR</li>
                  </ul>
                </ExperienceSection>
              </div>

              <div className=''>
                <h2 className='resume-header'>Work Experience</h2>
                <ExperienceSection title='Barista' subtitle="Stella's Coffee House | Oct 2015 - present" imageSrc='./stellas.jpg'>
                  <ul>
                    <li>Served hand-crafted coffee to hundreds of customers daily</li>
                    <li>Built positive rapport with customers and coworkers</li>
                    <li>Utilized effective communication skills in a fast paced environment</li>
                  </ul>
                </ExperienceSection>
                <ExperienceSection title='Lead Audio Engineer' subtitle="Swallow Hill Music | Oct 2014 - Feb 2018" imageSrc='./swallow_hill.jpg'>
                  <ul>
                    <li>Coordinated events, running audio, lighting, and production including two seasons on the production team at the Denver Botanic Gardens</li>
                    <li>Assisted on 30+ recordings, some of which are featured on the Moth Story Slam podcast sponsored by NPR</li>
                  </ul>
                </ExperienceSection>
              </div>
            </div>
          </div>
          <div className=''>
            <ExperienceSection>
              <a href='./Brevon_Good_Resumé.pdf' download>Download printable version</a>
            </ExperienceSection>
          </div>
        </div>

        <Testimonial author='Alyssa Ebert' position='Full-Stack Developer' imageSrc='https://media.licdn.com/dms/image/C5603AQEiYaoN439kFA/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=lATJrMGB7w3-bzERj1lhASY9zFmRdL0x-MsNy3UCz1A'>
          Brevon Good is a very skilled and knowledgable developer. He brings a sense of humor and creativity to every problem he encounters. Brevon has a natural instinct for fostering community and learning, and is very willing to dedicate time to helping his peers problem solve. I would highly recommend working with Brevon.
        </Testimonial>
        <ContactSection />
      </div>
    )
  }
}

export default Resume
