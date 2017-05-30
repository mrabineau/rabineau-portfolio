import React, { Component } from 'react';
import './gif.css';
import Mel from '../Mel/mel.js'

class Gif extends Component {
  render () {
    return (
      <div id="gif">
        <Mel />
          <img src={"https://media.giphy.com/media/l46CykJO7szNczcv6/giphy.gif"} alt="gif" id="seamless"/>
      </div>
    );
  }
}

export default Gif;
