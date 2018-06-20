// React

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Images

import Home from './Icones/home.svg'
import Musée from './Icones/musée.svg'
import Puzle from './Icones/puzle.svg'
import Boutique from './Icones/boutique.svg'
import Profil from './Icones/profil.svg'

// Containers

import HomePage from './Containers/Home.js'
import GamePage from './Containers/Game.js'
import CollectionPage from './Containers/Collection.js'
import ShopPage from './Containers/Shop.js'
import ProfilPage from './Containers/Profil.js'

// Style

import './Style/Navbar.css'
import './Style/App.css'

// Render

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
            <div className='Navbar'>
              <ul>
                <li><Link to="/"><img src={Home} alt='Home'/></Link></li>
                <li><Link to="/musée"><img src={Musée} alt='Musée'/></Link></li>
                <li><Link to="/puzzle"><img src={Puzle} alt='Puzzle'/></Link></li>
                <li><Link to="/shop"><img src={Boutique} alt='Shop'/></Link></li>
                <li><Link to="/profil"><img src={Profil} alt='Profil'/></Link></li>
              </ul>

              <Route exact path="/" component={HomePage} />
              <Route exact path="/musée" component={GamePage} />
              <Route exact path="/puzzle" component={CollectionPage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/profil" component={ProfilPage} />
            </div>
          </Router>
      </div>
    )
  }
}

export default App;
