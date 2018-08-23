import React from 'react'
import './skills-section.css'

class SkillsSection extends React.Component {
  render() {
    return (
      <section className='inner-section inner-skills wrapper'>
        <h2 className='h2'>Top Technical Skills</h2>
        <div className='skills-row'>
          <img className='skills-image' src='./react-logo.png' alt=''/>
          <img className='skills-image' src='/js-logo.png' alt=''/>
          <img className='skills-image' src='/node-logo.jpg' alt=''/>
          <img className='skills-image' src='/postgres-logo.svg' alt=''/>
        </div>
        <div className='skills-row'>
          <img className='skills-image' src='/html-logo.png' alt=''/>
          <img className='skills-image' src='/css-logo.svg' alt=''/>
          <img className='skills-image' src='/github-logo.svg' alt=''/>
          <img className='skills-image' src='/express-logo.png' alt=''/>
        </div>
      </section>
    )
  }
}

export default SkillsSection
