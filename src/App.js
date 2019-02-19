import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './GoogleMap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>Edgewater, NJ</h1>
          <p>Places I would like to visit after (hopefully) passing Nanodegree</p>
        </header>
        <div class="container">
          <GoogleMap />
          <nav id="sidebar">Testing</nav>
        </div>
      </div>
    );
  }
}

export default App;
