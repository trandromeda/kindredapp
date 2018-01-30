import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import LessonCard from './components/LessonCard';
import EmailBar from './components/EmailBar';
import Footer from './components/Footer';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
    const nav = document.getElementById("navbar");
    window.onscroll = function() {
      if (document.body.scrollTop >= 5 || document.documentElement.scrollTop >= 5) {
        nav.classList.add('white');
      } else {
        nav.classList.remove('white');
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <div className="user-preference">
        <h1>Preview</h1>
        <div className="lesson-container">
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />          
        </div>

        <EmailBar />

        <Footer />

        </div>
      </div>
    );
  }
}

export default App;
