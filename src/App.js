import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap.js'
import Sidebar from './Sidebar.js'

let locationsArray = [
  {name: 'Mitsuwa Marketplace', position: {lat: 40.8159891, lng: -73.97997}},
  {name: 'Kinokuniya', position: {lat: 40.816703942419494, lng: -73.97981464862823}},
  {name: 'Target', position: {lat: 40.814061, lng: -73.981719}},
  {name: 'SoJo Spa Club', position: {lat: 40.818949, lng: -73.979436}},
  {name: 'Sushi Cruise', position: {lat: 40.818186, lng: -73.97709}},
  {name: 'Edgewater Multiplex Cinemas', position: {lat: 40.807979, lng: -73.98806}},
  {name: 'McDonalds', position: {lat: 40.813605, lng: -73.9838}},
  {name: 'T.J.Maxx', position: {lat: 40.811844, lng: -73.984927}},
  {name: 'Kuppi Coffee Company', position: {lat: 40.818919, lng: -73.9768}},
  {name: 'Pet Valu', position: {lat: 40.820082, lng: -73.977218}},
  // might remove below
  {name: 'Genji Sushi, Gyoza, & Ramen Bar', position: {lat: 40.825034, lng: -73.97393}},
  {name: 'Karaoke Bar', position: {lat: 40.825339, lng: -73.974858}}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>Edgewater, NJ</h1>
          <p>Places I would like to visit after (hopefully) passing Nanodegree</p>
        </header>
        <div className="container">
          <GoogleMap className="map" locations={locationsArray}/>
          <Sidebar locations={locationsArray}/>
        </div>
      </div>
    );
  }
}

export default App;
