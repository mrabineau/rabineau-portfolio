import React, { Component }  from 'react';
import './main.css'

class Info extends Component {
  render () {
    return (
      <div id="info">
      <p id="text">React developer building creative sites for creative people.</p>
        <h2 id="info">Contact:</h2>
          <h2 className="contact">Email: Melanie.rabineau1@gmail.com</h2>
          <h2 className="contact">Github: https://github.com/mrabineau </h2>
          <h2 className="contact">Instagram: @google_mel </h2>
          <a href={"https://kimoji.com/password"}><h2 className="contact">Current Favorite Website</h2></a>
        <h1 id="soon">More coming soon</h1>
      </div>
    )
  }
}

export default Info;
