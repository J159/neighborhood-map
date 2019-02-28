import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';
import NoGoogleMap from './NoGoogleMap';

class GoogleMap extends Component {
  state = {
    map: null
  }

  mapReady = (props, map) => {
    this.setState({ map })
  }

  render() {
    const selectedPlaceObj = this.props.locations.find(location => location.name === this.props.selectedPlace)

    const style = {
        width: '100%',
        height: '100vh'
    }

    return (
      <Map
        onReady={this.mapReady}
        role="application"
        aria-label="map"
        style={style}
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

      {this.props.filteredLocations.map((location, key) =>
        <Marker
          key={key}
          onClick={this.props.onMarkerClick}
          name={location.name}
          position={{
            lat: location.position.lat,
            lng: location.position.lng
          }}
          animation={this.props.selectedPlace === location.name ? this.props.google.maps.Animation.BOUNCE : '0' }
        />
      )}

        <InfoWindow
          className="info"
          marker={this.props.activeMarker}
          visible={this.props.showInfoWindow}
          >
          <React.Fragment>
            {selectedPlaceObj &&
              <div>
              <h3>{selectedPlaceObj.name}</h3>
              <p>{selectedPlaceObj.wikiResult.extract}</p>
              <a href={selectedPlaceObj.wikiResult.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">{selectedPlaceObj.wikiResult.content_urls.desktop.page}</a>
              </div>
            }
          </React.Fragment>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec", LoadingContainer: NoGoogleMap
})(GoogleMap)
