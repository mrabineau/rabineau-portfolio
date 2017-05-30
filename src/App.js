import React, { Component } from 'react';
import './App.css';
import Gif from './Gif_Bar/gif.js'
import Mel from './Mel/mel.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Gif />
      </div>
    );
  }
}

export default App;
