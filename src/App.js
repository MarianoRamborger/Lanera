import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Footer from  './Footer/Footer.js'
import CCarousel from './Carousel/Carousel'
import Home from './Home/Home'
import Novedades from './Novedades/Novedades.js'
import ProductList from './Producto/ProductList'
import Lanas from './Lanas/Lanas.js'
import AllLanas from './Lanas/AllLanas.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
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

          <Route exact path="/lanas"   >
            <AllLanas lanas={ProductList} />
          </Route>


          <Route exact path="/algodon"   >
            <Lanas product={ProductList[0]} />
          </Route>
          
          <Route exact path="/lino"   >
            <Lanas product={ProductList[1]} />
          </Route>

          <Route exact path="/cachemir"   >
            <Lanas product={ProductList[2]} />
          </Route>

          <Route exact path="/alpaca"   >
            <Lanas product={ProductList[3]} />
          </Route>

          <Route exact path="/mohair"   >
            <Lanas product={ProductList[4]} />
          </Route>

          <Route exact path="/acrilico"   >
            <Lanas product={ProductList[5]} />
          </Route>

          <Route exact path="/poliester"   >
            <Lanas product={ProductList[6]} />
          </Route>

          <Route exact path="/lurex"   >
            <Lanas product={ProductList[7]} />
          </Route>

          <Route exact path="/merino"   >
            <Lanas product={ProductList[8]} />
          </Route>

          <Route exact path="/mixtas"   >
            <Lanas product={ProductList[9]} />
          </Route>

        </Switch>

        </div>
      </div>
    <Footer />

  </Router>
)




}

export default App;
