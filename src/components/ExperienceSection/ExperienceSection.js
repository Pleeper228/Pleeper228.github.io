import React from 'react'
import './experience-section.css'

class ExperienceSection extends React.Component {
  render() {
    return (
      <section className='experience-section'>
        {this.props.imageSrc ? <img src={this.props.imageSrc} alt='' className='experience-image' /> : null}
        <div className='experience-content'>
          <h2 className='experience-header'>{this.props.title}</h2>
          <h3 className='experience-subheader'>{this.props.subtitle}</h3>
          <div className='experience-body'>{this.props.children}</div>
        </div>
      </section>
    )
  }
}

export default ExperienceSection
