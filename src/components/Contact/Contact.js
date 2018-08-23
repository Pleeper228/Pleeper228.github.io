import React from 'react'
import TabHeader from '../TabHeader'
import ContactForm from '../ContactForm'
import './contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <TabHeader title='Contact' subtitle='Feel free to reach out any time!' />
        <ContactForm />
      </div>
    )
  }
}

export default Contact
