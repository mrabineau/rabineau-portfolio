import React, { Component } from 'react';
import './App.css';
import Gif from './Gif_Bar/gif.js'
import Main from './Page_One/main.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Gif />
        <Main />
      </div>
    );
  }
}

export default App;
