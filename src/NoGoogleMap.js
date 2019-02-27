import React, {Component} from 'react';
import './App.css';

class NoGoogleMap extends Component {
  state = {
    show: false,
    timeout: null
  }

  componentDidMount = () => {
    // after one second, call showMessage function
    let timeout = window.setTimeout(this.showMessage, 1000);
    this.setState({timeout});
  }

  // if timeout is still running, clear the timeout
  componentWillUnmount = () => {
    window.clearTimeout(this.state.timeout);
  }

  // Set show to true, which activates the error message within render/return
  showMessage = () => {
      this.setState({show: true});
  }

  // if this.state.show is true, display the div with Error message. If not, display the div with Loading message
  render = () => {
    const textStyle = {
      width: '100%',
      margin: '0 auto',
      textAlign: 'center'
    };

    return (
      <div style={textStyle}>
        {this.state.show ?
          (
            <div>
              <h1>Error: Map Load Fail</h1>
              <p>Please check internet connection.</p>
            </div>
          ) :
          (
            <div>
              <h1>Loading, Please Wait</h1>
              <p>Your content will arrive shortly.</p>
            </div>)
          }
        </div>)
  }
}

export default NoGoogleMap;
