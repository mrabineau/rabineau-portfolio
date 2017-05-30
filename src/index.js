import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Page_One/main.js'
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';


  ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/main" component ={Main} />
    </div>
  </BrowserRouter>

    ), document.getElementById('root'));


