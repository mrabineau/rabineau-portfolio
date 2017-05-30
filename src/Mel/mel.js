import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './mel.css'

class Mel extends Component {
  render () {
    return (
      <div className="header">
        <h1 className="intro"><Link className="link" to="/main"> Mel Rabineau</Link></h1>
          <div className="intro">
            <h2 id="scroll">scroll</h2>
              <img id="hand" src={"http://sevillabackpackers.es/wp-content/uploads/003685-black-ink-grunge-stamp-textures-icon-arrows-hand-clear-pointer-down.png"} alt="hand" />
          </div>
      </div>
    );
  }
}

export default Mel;
