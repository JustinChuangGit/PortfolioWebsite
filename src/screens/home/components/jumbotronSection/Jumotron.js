import React, { Component } from 'react';
import './Jumbotron.css';
import ParticlesBackground from './ParticlesBackgound';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron p-5 rounded-lg text-center position-relative">
        <ParticlesBackground id="particles" />
        <h1 className="display-4">HI I'M JUSTIN CHUANG</h1>
        <p className="lead">Mechatronic Systems Engineer</p>
      </div>
    );
  }
}

export default Jumbotron;
