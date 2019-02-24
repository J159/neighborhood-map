import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  state = {
    query: "",
    searchResults: this.props.locations
  }

  updateQuery = (query) => {
    this.setState({ query }, () => {
      this.updateSidebar(query)
    })
  }

  updateSidebar = (query) => {
    let updateSidebarResultes = this.props.locations.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ searchResults: updateSidebarResultes})
    console.log(this.state.searchResults)
  }

  render() {
    return (
      <nav id="sidebar">
        <input
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        <ul id="results">
          {this.state.searchResults.map((location, key) =>
            <li key={key}>
              <button>{location.name}</button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
