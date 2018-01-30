import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './styles/App.css';
import logo from './images/colour-logo.png';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

class App extends Component {

  componentDidMount() {
    const nav = document.getElementById("navbar");
    window.onscroll = function() {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.classList.add('white');
      } else {
        nav.classList.remove('white');
      }
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/coming-soon" component={ComingSoon} />

        <Footer />
      </div>
    );
  }
}

export default App;
