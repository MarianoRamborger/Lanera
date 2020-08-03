import React from 'react';
import './App.css';
import Header from './Header/Header.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //Link
} from "react-router-dom";


const App = () => {

return(
  <Router>

  <Header />


  <Switch>

  <Route path="/"/>


  </Switch>

  </Router>
)




}

export default App;
