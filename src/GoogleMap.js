import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const style = {
        width: '100%',
        height: '100vh',
        float: 'right',
        overflow: 'hidden'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={14}
        initialCenter={
          {lat: 40.815989, lng: -73.97997}
        }
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyWz-7NRnDzdE0kkFMlZ3HGNa7avBIOec"
})(GoogleMap)
