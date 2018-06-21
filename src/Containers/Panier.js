import React, { Component } from 'react'

class Panier extends Component {
  render() {
    return (
      <div className="Panier">
        <h1>PANIER</h1>
        <p>Votre commande</p>
        <div>
          Votre panier est vide
        </div>
        <input type="text"></input>
        <button>COMMANDER</button>
      </div>
    );
  }
}

export default Panier;
