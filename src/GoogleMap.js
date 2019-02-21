import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
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
    const style = {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      float: 'right'
    }

    let locationArray = [
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
    ];



    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        style={style}
        zoom={15}
        initialCenter={
          {lat: 40.815513, lng: -73.982988}
        }
        styles = {[{'featureType': 'water',
          'stylers': [
            {'color' : '#f05c84'}
          ]
        }]}
      >
        <Marker
          onClick={this.onMarkerClick}
          name='Mitsuwa Marketplace'
          position={{lat: 40.8159891, lng: -73.97997}}
        />
        <Marker
          name='Kinokuniya'
          position={{lat: 40.816703942419494, lng: -73.97981464862823}}
        />
        <Marker
          name='Target'
          position={{lat: 40.814061, lng: -73.981719}}
        />
        <Marker
          name='SoJo Spa Club'
          position={{lat: 40.818949, lng: -73.979436}}
        />
        <Marker
          name='Sushi Cruise'
          position={{lat: 40.818186, lng: -73.97709}}
        />
        <Marker
          name='Edgewater Multiplex Cinemas'
          position={{lat: 40.807979, lng: -73.98806}}
        />
        <Marker
          name='McDonalds'
          position={{lat: 40.813605, lng: -73.9838}}
        />
        <Marker
          name='T.J.Maxx'
          position={{lat: 40.811844, lng: -73.984927}}
        />
        <Marker
          name='Kuppi Coffee Company'
          position={{lat: 40.818919, lng: -73.9768}}
        />
        <Marker
          name='Pet Valu'
          position={{lat: 40.820082, lng: -73.977218}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec"
})(GoogleMap)
