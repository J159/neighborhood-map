import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap.js'
import Sidebar from './Sidebar.js'

let locationsArray = [
  {name: 'Mitsuwa Marketplace',
   position: {lat: 40.8159891, lng: -73.97997},
   search: 'Mitsuwa Marketplace'
  },
  {name: 'Kinokuniya',
   position: {lat: 40.816703942419494, lng: -73.97981464862823},
   search: 'Books Kinokuniya'
  },
  {name: 'Target',
   position: {lat: 40.814061, lng: -73.981719},
   search: 'Target Corporation'
 },
  {name: 'SoJo Spa Club',
   position: {lat: 40.818949, lng: -73.979436},
   search: 'spa'
 },
  {name: 'Sushi Cruise',
   position: {lat: 40.818186, lng: -73.97709},
   search: 'sushi'
 },
  {name: 'Edgewater Multiplex Cinemas',
   position: {lat: 40.807979, lng: -73.98806},
   search: 'Movie theater'
 },
  {name: 'McDonalds',
   position: {lat: 40.813605, lng: -73.9838},
   search: 'McDonalds'
 },
  {name: 'TJ Maxx',
   position: {lat: 40.811844, lng: -73.984927},
   search: 'TJ Maxx'
 },
  {name: 'Trader Joes',
   position: {lat: 40.821797, lng: -73.976758},
   search: 'Trader Joes'
 },
  {name: 'Pet Valu',
   position: {lat: 40.820082, lng: -73.977218},
   search: 'Pet Store'
 },
  {name: 'Whole Foods Market',
   position: {lat: 40.825034, lng: -73.97393},
   search: 'Whole Foods Market'
 },
  {name: 'Karaoke Bar',
   position: {lat: 40.825339, lng: -73.974858},
   search: 'Karaoke box'
 }
]


class App extends Component {
  state = {
    query: "",
    searchResults: locationsArray,
    wikiResults: [],
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  componentDidMount = () => {
    let newArray = []
    locationsArray.forEach( location => {
      let search = location.search
      let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${search}`
      fetch(url)
      .then(response => response.json())
      .then(json => {
        newArray.push(json)
      })
      .then( this.setState({ wikiResults : newArray}) )
      .catch(error =>
        console.log('Drats, no wiki results!')
      )
    })
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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    })

  onMapClicked = (props) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>Edgewater, NJ</h1>
          <p>Places I would like to visit after (hopefully) passing Nanodegree</p>
        </header>
        <div className="container">
          <GoogleMap className="map"
            locations={this.state.searchResults}
            wikiResults={this.state.wikiResults}
            showInfoWindow={this.state.showInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedPlace={this.state.selectedPlace}
            onMarkerClick={this.onMarkerClick}
            onMapClicked={this.onMapClicked}
            />
          <Sidebar
            locations={this.state.searchResults}
            query={this.state.query}
            updateQuery={this.updateQuery}
            showInfoWindow={this.state.showInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedPlace={this.state.selectedPlace}
            onMarkerClick={this.onMarkerClick}
            onMapClicked={this.onMapClicked}
            />
        </div>
      </div>
    );
  }
}

export default App;
