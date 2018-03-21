import React, { Component } from 'react';

import '../App.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Clicky Game!</h1>
                <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
        <div class="container">
            <img src="..." alt="..." className="img-thumbnail" />
        </div>
      </div>
    );
  }
}

export default Body;