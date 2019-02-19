import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap.js'
import Sidebar from './Sidebar.js'

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
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
