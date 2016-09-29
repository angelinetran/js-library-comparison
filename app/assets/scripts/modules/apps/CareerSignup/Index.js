import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './modules/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

function CareerSignUp() {
  render((
    <Router history={browserHistory}>
      <Route path="/react.html" component={App}/>
    </Router>

  ),document.getElementById('careerSignUpApp'));
 }

export default CareerSignUp