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
  {name: 'TJ Maxx', position: {lat: 40.811844, lng: -73.984927}},
  {name: 'Kuppi Coffee Company', position: {lat: 40.818919, lng: -73.9768}},
  {name: 'Pet Valu', position: {lat: 40.820082, lng: -73.977218}},
  {name: 'Genji Sushi, Gyoza, & Ramen Bar', position: {lat: 40.825034, lng: -73.97393}},
  {name: 'Karaoke Bar', position: {lat: 40.825339, lng: -73.974858}}
]


class App extends Component {
  state = {
    query: "",
    searchResults: locationsArray,
    data: null
  }

  componentDidMount = () => {
    fetch('https://api.foursquare.com/v2/venues/search?client_id=5D2JD0EWZWULW0EUSWBBE0Y5VM3BJZZL2AWWDPRT1HEKI2X0&client_secret=5MN5GQBRKT5NENQCPX3AIYPWV53AEY0BYV3TC224CBFUAWME&v=20180323&ll=40.8159891,-73.97997')
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch(error =>
      // Code for handling errors
      console.log('Mayday! Mayday! Fetch failed!')
    );
  }

  filterVenueData = (data) => {
    if (searchResults.name)

  }

  updateQuery = (query) => {
    this.setState({ query }, () => {
      this.updateSidebar(query)
    })
  }

  updateSidebar = (query) => {
    let updateSidebarResultes = locationsArray.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ searchResults: updateSidebarResultes})
    console.log(this.state.searchResults)
  }

  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>Edgewater, NJ</h1>
          <p>Places I would like to visit after (hopefully) passing Nanodegree</p>
        </header>
        <div className="container">
          <GoogleMap className="map" locations={this.state.searchResults}/>
          <Sidebar
            locations={this.state.searchResults}
            query={this.state.query}
            updateQuery={this.updateQuery}/>
        </div>
      </div>
    );
  }
}

export default App;
