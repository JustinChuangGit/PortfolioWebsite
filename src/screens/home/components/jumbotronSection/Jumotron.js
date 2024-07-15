import React, { Component } from 'react';
import './Jumbotron.css';
import ParticlesBackground from './ParticlesBackground.js';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron py-5 rounded-lg text-center ">
        <ParticlesBackground id="particles" />
        <div className='main-title'>
          <h1>HI IM JUSTIN CHUANG</h1>
        </div>
        <div className='sub-title'>
          <p>I thrive on tackling cutting-edge projects, pushing boundaries, and thinking outside the box to create innovative solutions.</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
