import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  state = {
    query: ""
  }

  updateQuery = (query) => {
    // set this.updateSearchResults within this.setState to guarantte order
    this.setState({ query }, () => {
      this.updateSearchResults(query)
    })
  }

  render() {
    return (
      <nav id="sidebar">Testing
        <input
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </nav>
    );
  }
}

export default Sidebar;
