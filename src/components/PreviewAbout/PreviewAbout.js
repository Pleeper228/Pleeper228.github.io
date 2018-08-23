import React from 'react'
import MyButton from '../MyButton'
import {Link} from 'react-router-dom'
import './preview-about.css'

class PreviewAbout extends React.Component {
  render() {
    return (
      <section className='preview-about'>
        <div className='inner-section inner-about wrapper'>
          <article className='profile-description-container'>
            <h1 className='profile-title'>My name is Brevon</h1>
            <h2 className='profile-subtitle'>I make web applications</h2>
            <p className='profile-text'>
              I'm a full-stack developer and former musician with a BS in Recording Arts Technology that helps me approach problems with new, creative solutions. Working as a Live Sound Engineer I've learned to adapt quickly, if problems occur during an event you can't just stop, the show must go on, and that's the same attitude I bring to web development.
              <br />
              <br />

              If you're interested in learning more about me and projects I've worked on, check out my Github or my LinkedIn, or reach out to me directly through my contact info I love to talk anything coding!
            </p>
            <div className='profile-buttons'>
              <Link to='/projects'><MyButton title='View My Projects' theme='red' className='project-view'/></Link>
              <Link to='/resume'><MyButton title='Check Out My Resumé' theme='white'/></Link>
            </div>
          </article>
          <img src='./profile-2.JPG' alt='' className='profile-image'/>
        </div>
      </section>
    )
  }
}

export default PreviewAbout
