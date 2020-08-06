import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Footer from  './Footer/Footer.js'
import CCarousel from './Carousel/Carousel'
import Home from './Home/Home'
import Novedades from './Novedades/Novedades.js'
import ProductList from './Producto/ProductList'
import Lanas from './Lanas/Lanas.js'

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

    <div className="app-wrapper"> 
    <Header />

    <div className="content-wrapper">

        <Switch>

            <Route exact path='/'>

                  <CCarousel/>

                  <Home />

                  <Novedades />
    
          </Route>


          <Route exact path="/algodon"   >

          <Lanas product={ProductList[0]} />

          </Route>

        </Switch>

        </div>
      </div>
    <Footer />

  </Router>
)




}

export default App;
