import React, { Component } from 'react'
import NavBar from './components/NavBar/'
import Footer from './components/Footer/'
import Home from './components/Home/'
import Projects from './components/Projects/'
import About from './components/About/'
import Resume from './components/Resume/'
import Contact from './components/Contact/'
import {HashRouter as Router, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className='app'>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Footer} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
