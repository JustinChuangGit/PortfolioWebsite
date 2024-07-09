import React, { Component } from 'react';
import './Jumbotron.css';
import ParticlesBackground from './ParticlesBackgound';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron p-5 rounded-lg text-center position-relative">
        <ParticlesBackground id="particles" />
        <div className='main-title'>
          <h1>HI IM JUSTIN CHUANG</h1>
        </div>

        <div className='sub-title'>
          <p>I thrive on tackling cutting-edge projects, pushing boundaries, and thinking outside the box to create innovation solutions</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
