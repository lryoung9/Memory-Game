import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import './App.css';

// const App = () => ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
