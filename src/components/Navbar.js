import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar fixedd-top navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Click Memory Game</a>
            <span class="navbar-text feedback"></span>
            <span class="navbar-text score"></span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
