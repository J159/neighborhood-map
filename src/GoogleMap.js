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

    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
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

      {this.props.locations.map((location, key) =>
        <Marker
          key={location.name}
          onClick={this.onMarkerClick}
          name={location.name}
          position={{
            lat: location.position.lat,
            lng: location.position.lng
          }}
          animation={this.props.google.maps.Animation.DROP}
        />
      )}

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
