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
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  componentDidMount = () => {
    let promises = locationsArray.map(location => {
      let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${location.search}`
      return fetch(url)
        .then(response => response.json())
        // this will add the wikiResult to the location object
        .then(wikiResult => ({ ...location, wikiResult }))
    })
    Promise.all(promises)
      .then(searchResults => this.setState({ searchResults }))
      .catch(err => { alert('My apologies, Wikipedia data retrival unsuccessful') })
  }

  updateQuery = (query) => {
    this.setState({ query }, () => {
      this.updateSidebar(query)
    })
  }

  updateSidebar = (query) => {
    // Updates the sidebar by filtering through locationsArray by name.
    let updateSidebarResultes = locationsArray.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ searchResults: updateSidebarResultes})
  }

  onMarkerClick = (props, marker, e) =>
    // When marker is clicked, display infowindow
    this.setState({
      selectedPlace: props.name,
      activeMarker: marker,
      showInfoWindow: true
    })

  onMapClicked = () => {
    // When empty space on map clicked, close all markers
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }

  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>Edgewater, NJ</h1>
          <p>Places to visit after (hopefully) passing Nanodegree</p>
        </header>
        <div className="container">
          <GoogleMap
            className="map"
            locations={this.state.searchResults}
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
