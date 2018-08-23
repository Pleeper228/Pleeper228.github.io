import React from 'react'
import MyButton from '../MyButton'
import './capstone-section.css'

class CapstoneSection extends React.Component {
  render() {
    return (
      <section className='capstone-section'>
        <div className='inner-section inner-capstone wrapper'>
          <h2 className='h2'>Capstone Project</h2>
          <div className='capstone-content'>
            <img src='https://media.giphy.com/media/XoywQKznL9QaQlnaY8/giphy.gif' alt='' className='capstone-image'/>
            <article className='capstone-description-container'>
              <h3 className='capstone-subtitle'>Pay Me Connor</h3>
              <p className='capstone-text'>
                Pay Me Connor is a mobile app that allows users to track bills and payments between roommates. As a user you can add as many roommates and bills as you need. You can add payment records, and you can see a log of all payments made as well as a running total of all bill balances.
              </p>
              <ul className='capstone-list-container'>
                <li className='capstone-list-item'>
                  <img className='svg' src='./phone.svg' alt='' />
                  <p className='capstone-list-text'>Built in React Native</p>
                </li>
                <li className='capstone-list-item'>
                  <img className='svg' src='./server.svg' alt='' />
                  <p className='capstone-list-text'>Express server hosted on Heroku</p>
                </li>
                <li className='capstone-list-item'>
                  <img className='svg' src='./database.svg' alt='' />
                  <p className='capstone-list-text'>PostgreSQL database</p>
                </li>
              </ul>
              <a href='https://github.com/Pleeper228/pay-me-connor-client'><MyButton title='View Git Repo' theme='red' className='capstone-button'/></a>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default CapstoneSection
