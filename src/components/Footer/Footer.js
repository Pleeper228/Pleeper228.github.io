import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer wrapper'>
        <p className='legal'>2018 Brevon Good. This site is heavily based off Seb Kay's personal site found <a className='seb-kay' href='https://sebkay.com/'>here.</a>
        <br/>
        Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>

        <nav className='footer-container'>
          <ul className='right-footer-items'>
            <Link to='/' className='footer-item'><li>Home</li></Link>
            <Link to='/projects' className='footer-item'><li>Projects</li></Link>
            <Link to='/about' className='footer-item'><li>About</li></Link>
            <Link to='/resume' className='footer-item'><li>Resumé</li></Link>
            <Link to='/contact' className='footer-item'><li>Contact</li></Link>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default Footer
