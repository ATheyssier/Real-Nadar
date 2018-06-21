import image1 from  '../Icones/Nadar-Sarah-Bernhardt.jpg'
import React, { Component } from 'react'


class Détails extends Component {
  render() {
    return (
      <div className="Détails">
        <h1>TROUVER LES OEUVRES</h1>
        <p>Les Nadars par les Nadars</p>
        <img src={image1} alt=''/>
        <p>Nom de l'oeuvre</p>
        <a href="https://fr.wikipedia.org/wiki/Nadar">En savoir plus</a>
      </div>
    );
  }
}

export default Détails;
