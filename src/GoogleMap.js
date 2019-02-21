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
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Kinokuniya'
          position={{lat: 40.816703942419494, lng: -73.97981464862823}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Target'
          position={{lat: 40.814061, lng: -73.981719}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='SoJo Spa Club'
          position={{lat: 40.818949, lng: -73.979436}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Sushi Cruise'
          position={{lat: 40.818186, lng: -73.97709}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Edgewater Multiplex Cinemas'
          position={{lat: 40.807979, lng: -73.98806}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='McDonalds'
          position={{lat: 40.813605, lng: -73.9838}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='T.J.Maxx'
          position={{lat: 40.811844, lng: -73.984927}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Kuppi Coffee Company'
          position={{lat: 40.818919, lng: -73.9768}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          onClick={this.onMarkerClick}
          name='Pet Valu'
          position={{lat: 40.820082, lng: -73.977218}}
          animation={this.props.google.maps.Animation.DROP}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          animation={this.props.google.maps.Animation.BOUNCE}
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
