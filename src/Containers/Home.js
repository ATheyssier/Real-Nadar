import React, { Component } from 'react'
import image1 from '../Icones/Sarah.png'
import '../Style/Home.css'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>BIENVENUE</h1>
        <img  className='imgBvn' src={image1} alt='Nadar-Sarah-Bernhardt'/>
        <p className="ez">Participez à notre jeu concours pour avoir une
          chance de remporter différents lots de la boutique</p>
        <input type='button' value='Je joue !'/>
      </div>
    );
  }
}

export default HomePage;
