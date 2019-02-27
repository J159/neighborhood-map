import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {

  render() {
    const selectedPlaceObj = this.props.locations.find(location => location.name === this.props.selectedPlace)

    return (
      <nav id="sidebar">
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={this.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        <ul id="results">
          {this.props.locations.map((location, key) =>
            <li key={key}>
              <button
                key={key}
                onClick={e => this
                .props
                .onMarkerClick(selectedPlaceObj)}>
                {location.name}</button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
