import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

class GoogleMap extends Component {
  render() {

    return (
      <Map
        onClick={this.props.onMapClicked}
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

      <Marker
        onClick={this.props.onMarkerClick}
        name='Mitsuwa Marketplace'
        position={{lat: 40.8159891, lng: -73.97997}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Kinokuniya'
        position={{lat: 40.816703942419494, lng: -73.97981464862823}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Target'
        position={{lat: 40.814061, lng: -73.981719}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='SoJo Spa Club'
        position={{lat: 40.818949, lng: -73.979436}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Sushi Cruise'
        position={{lat: 40.818186, lng: -73.97709}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Edgewater Multiplex Cinemas'
        position={{lat: 40.807979, lng: -73.98806}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='McDonalds'
        position={{lat: 40.813605, lng: -73.9838}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='T.J.Maxx'
        position={{lat: 40.811844, lng: -73.984927}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Trader Joes'
        position={{lat: 40.821797, lng: -73.976758}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Pet Valu'
        position={{lat: 40.820082, lng: -73.977218}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Whole Foods Market'
        position={{lat: 40.825034, lng: -73.97393}}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        name='Karaoke Bar'
        position={{lat: 40.825339, lng: -73.974858}}
      />

        <InfoWindow
          marker={this.props.activeMarker}
          animation={this.props.google.maps.Animation.BOUNCE}
          visible={this.props.showInfoWindow}>
          <div>
            <h3>{this.props.selectedPlace.name}</h3>
            <p>{this.props.wikiResults.extract}</p>
          </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec"
})(GoogleMap)
