import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    map: null
  }

  mapReady = (props, map) => {
    this.setState({ map })
  }

  render() {
    const selectedPlaceObj = this.props.locations.find(location => location.name === this.props.selectedPlace)

    return (
      <Map
        onReady={this.mapReady}
        role="application"
        aria-label="map"
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

      {this.props.locations.map((location, key) =>
        <Marker
          key={key}
          onClick={this.props.onMarkerClick}
          name={location.name}
          position={{
            lat: location.position.lat,
            lng: location.position.lng
          }}
        />
      )}

      <InfoWindow
          marker={this.props.activeMarker}
          animation={this.props.google.maps.Animation.BOUNCE}
          visible={this.props.showInfoWindow}>
          {selectedPlaceObj && <div>
            <h3>{selectedPlaceObj.name}</h3>
            <p>{selectedPlaceObj.wikiResult.extract}</p>
            <a href={selectedPlaceObj.wikiResult.content_urls.desktop.page} target="_blank">{selectedPlaceObj.wikiResult.content_urls.desktop.page}</a>
          </div>}
</InfoWindow>



      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec"
})(GoogleMap)
