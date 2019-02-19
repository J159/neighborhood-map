import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const style = {
      width: '100%',
      height: '100vh',
      float: 'right',
      overflow: 'hidden'
    }

    let locationArray = [
      {title: 'Mitsuwa Marketplace', location: {lat: 40.8159891, lng: -73.97997}},
      {title: 'Kinokuniya', location: {lat: 40.816703942419494, lng: -73.97981464862823}},
      {title: 'Target', location: {lat: 40.814061, lng: -73.981719}},
      {title: 'SoJo Spa Club', location: {lat: 40.818949, lng: -73.979436}},
      {title: 'Sushi Cruise', location: {lat: 40.818186, lng: -73.97709}},
      {title: 'Edgewater Multiplex Cinemas', location: {lat: 40.807979, lng: -73.98806}},
      {title: 'McDonalds', location: {lat: 40.813605, lng: -73.9838}},
      {title: 'T.J.Maxx', location: {lat: 40.811844, lng: -73.984927}},
      {title: 'Kuppi Coffee Company', location: {lat: 40.818919, lng: -73.9768}},
      {title: 'Pet Valu', location: {lat: 40.820082, lng: -73.977218}},
      // might remove below
      {title: 'Genji Sushi, Gyoza, & Ramen Bar', location: {lat: 40.825034, lng: -73.97393}},
      {title: 'Karaoke Bar', location: {lat: 40.825339, lng: -73.974858}}
    ];



    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={16}
        initialCenter={
          {lat: 40.815989, lng: -73.97997}
        }
        styles = {[{'featureType': 'water',
          'stylers': [
            {'color' : '#f05c84'}
          ]
        }]}
      >
        <Marker
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

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec"
})(GoogleMap)
