import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  state = {
    activePlace: null,
    extract: null,
    contentURL: null
  }

  onSidebarClick = place => {
    this.setState({
      activePlace: place.name,
      extract: place.wikiResult.extract,
      contentURL: place.wikiResult.content_urls.desktop.page
    })
    this.props.closeInfoWindow();
  }

  render() {
    return (
      <nav id="sidebar">
        <input
          type="text"
          placeholder="Search"
          name="search"
          autoComplete="off"
          value={this.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        <ul id="results">
          {this.props.filteredLocations.map((location, key) => {
            return (
            <li key={key}>
              <button
                key={key}
                onClick={e => this.onSidebarClick(location)}>
                {location.name}
              </button>
              {this.state.activePlace === location.name && <div className="sidebarInfo">{this.state.extract}
              <br></br>
              <a href={this.state.contentURL} target="_blank" rel="noopener noreferrer">Wiki</a></div>}
            </li>)
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
