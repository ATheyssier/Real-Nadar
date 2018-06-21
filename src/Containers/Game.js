import React, { Component } from 'react'

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <h1>JEU CONCOURS</h1>
        {/* insert game here */}
        <p>trouver le nom de la personnalité prise en photo par Nadar</p>
        <input type="text" />
        <br />
        <button>INDICE</button>
        <button>VALIDER</button>
      </div>
    );
  }
}

export default Game;
