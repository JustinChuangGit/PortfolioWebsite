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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales at leo a porta. Suspendisse porta tellus lectus, iaculis vestibulum elit hendrerit ut...</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
