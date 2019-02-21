import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  state = {
    query: ""
  }

  updateQuery = (query) => {
    // set this.updateSearchResults within this.setState to guarantte order
    this.setState({ query }, () => {
      // this.updateSearchResults(query)
      console.log(query);
      this.locationArray.forEach(location => {
        console.log(location)
      })
    })
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
      <ul>
        {this.props.locations.map((location, key) =>
          <li key={location.id}>
            {location.name}
          </li>
        )}
      </ul>

      </nav>
    );
  }
}

export default Sidebar;
