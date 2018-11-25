import React, { Component } from 'react';
import logo from '../../Media/Pictures/logo.svg';
import './WebsiteMain.css';

class WebsiteMain extends Component {
  render() {
    return (
      <div className="WebsiteMain">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default WebsiteMain;
