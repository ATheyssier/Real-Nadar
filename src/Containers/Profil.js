import React, { Component } from 'react'
import Chat from '../Icones/chat.jpg'

class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <h1>PROFIL</h1>
        <img src={Chat} />
        <br />
        <label>E-mail<input type="text" /></label>
        <button>Stylo</button>
        <label>password<input type="text" /></label>
        <button>Stylo</button>
        <hr />
        <p>Historique de vos commandes</p>
        <p>Aucune commande</p>
      </div>
    );
  }
}

export default Profil;
