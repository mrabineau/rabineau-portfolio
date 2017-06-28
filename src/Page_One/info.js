import React, { Component }  from 'react';
import './main.css'

class Info extends Component {
  render () {
    return (
      <div id="about">
      <p id="text">React developer <br/> building creative sites <br/> for creative people </p>
        <div id="me">
          <h2 id="info">Contact:</h2>
            <h2 className="contact">Email: Melanie.rabineau1@gmail.com</h2>
            <h2 className="contact">Github: https://github.com/mrabineau </h2>
            <h2 className="contact">Instagram: @sideshow.mel </h2>
            <a href={"https://kimoji.com/password"}><h2 className="contact">Current Favorite Website</h2></a>
        </div>
      </div>
    )
  }
}

export default Info;
