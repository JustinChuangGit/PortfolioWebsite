import React, { Component } from 'react';
import ParticlesBackground from './ParticlesBackgound';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron bg-light p-5 rounded-lg text-center">
        <ParticlesBackground id="particles" />
        <h1 className="display-4">Justin Chuang</h1>
        <p className="lead">Mechatronic Systems Engineer</p>
      </div>
    );
  }
}

export default Jumbotron;
