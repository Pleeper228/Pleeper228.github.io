import React from 'react'
import MyButton from '../MyButton'
import './contact-form.css'

class ContactForm extends React.Component {
  render() {
    return (
      <form className='contact-form wrapper inner-section'>
        <div className='inner-form'>
          <div className='form-row'>
            <div className='form-item'>
              <label className='form-label'>Name <span className='required'>*</span></label>
              <input className='form-field' required />
            </div>
            <div className='form-item'>
              <label className='form-label'>Email <span className='required'>*</span></label>
              <input className='form-field' required />
            </div>
          </div>
          <div className='form-item'>
            <label className='form-label'>Subject <span className='required'>*</span></label>
            <input className='form-field' required />
          </div>
          <div className='form-item'>
            <label className='form-label'>What can I do for you? <span className='required'>*</span></label>
            <textarea className='text-field form-field' required />
          </div>
        </div>
        <MyButton title='Submit' theme='red' className='submit-form'/>
      </form>
    )
  }
}

export default ContactForm
