import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class About extends Component {
  render() {
    return (
        <div className="about">
            <h1>About</h1>

            <p>
            Kindred is a community for people to learn valuable life skills from retirees via small, in-person group lessons. Meet interesting folks, share stories and laughter with friendly faces from your neighbourhood, and come away with unforgettable new memories.
            </p>

            <div className="trio-benefits">
              <div className="benefit">
                <i class="fas fa-map"></i>
                <h2>Connect</h2>
                <p>with people from different walks of life</p>
              </div>
              <div className="benefit">
                <i class="far fa-user-circle"></i>
                <h2>Share</h2>
                <p>stories collected gained over a lifetime</p>
              </div>
              <div className="benefit">
                <i class="far fa-heart"></i>
                <h2>Cherish</h2>
                <p>new friends, new skills and new memories</p>
              </div>

            </div>

            <p>
            Founded in 2017 and based in Toronto, Kindred connects you with individuals from all walks of life to learn from one another while having fun, whether it's making Maria's secret spaghetti sauce, practicing Hubert's six easy steps to tie a tie, or packing colourful bento boxes with Hisami.
            </p>

            <h1>Mission</h1>
            <p>
            Our goal is to enrich the lives of seniors and empower them to be inspiring mentors for young people everywhere. We will do this by creating spaces for fun and personalized learning experiences, highlighting the wealth of knowledge that seniors have to share.
            </p>

            <p>
            In doing so, we will also strive to:
            </p>

            <ul>
              <li>Preserve cultural knowledge that may otherwise be lost to time,</li>
              <li>Encourage people to do social good,</li>
              <li>Provide a form of financial gain to seniors, and</li>
              <li>Tap into the underutilized resources possessed by an entire generation</li>

            </ul>        

            <h1>Vision</h1>
            <p>
            A world where every stage of life is celebrated and lived to its fullest, from beginning to end.
            </p>
        </div>
      )
  }
}

export default About;
