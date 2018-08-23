import React from 'react'
import './testimonial.css'

class Testimonial extends React.Component {
  render() {
    return (
      <section className='testimonial'>
        <div className='inner-testimonial'>
          <p className='testimonial-text'>
            "{this.props.children}"
          </p>
          <div className='testimonial-credit'>
            <img className='testimonial-image' src={this.props.imageSrc} alt='' />
            <p className='testimonial-author'>{this.props.author} - {this.props.position}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonial
