import React, { Component } from 'react'
import PhotoMeuf from '../Icones/Nadar-Sarah-Bernhardt.jpg'



class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {price: ''};

  }

  Price15 = () => {
    this.setState({price: '15€'})
  }

  Price20 = () => {
    this.setState({price: '20€'})
  }

  Price25 = () => {
    this.setState({price: '25€'})
  }

  Price30 = () => {
    this.setState({price: '30€'})
  }

  Price35 = () => {
    this.setState({price: '35€'})
  }
  render() {
    return (
      <div className="Shop">
        <h1>BOUTIQUE</h1>
        <p>Retrouver toutes les reproductions des oeuvres en tirage haute qualité</p>
        <div className="SearchBar">
          <input type="text" />
          <button>ImageLoupe</button>
        </div>
          <br />
          <img src={PhotoMeuf} />
          <p>Nom de l'oeuvre</p>
            <button onClick={this.Price15}>A4</button>
            <button onClick={this.Price20}>A3</button>
            <button onClick={this.Price25}>A2</button>
            <button onClick={this.Price30}>A1</button>
            <button onClick={this.Price35}>A0</button>
          <p className="Price">{this.state.price}</p>
          <button>ImagePanierAjouter au panier</button>
          <hr />
          <img src={PhotoMeuf} />
          <p>Nom de l'oeuvre</p>
            <button onClick={this.Price15}>A4</button>
            <button onClick={this.Price20}>A3</button>
            <button onClick={this.Price25}>A2</button>
            <button onClick={this.Price30}>A1</button>
            <button onClick={this.Price35}>A0</button>
          <p className="Price">{this.state.price}</p>
          <button>ImagePanierAjouter au panier</button>
          <hr />
          <img src={PhotoMeuf} />
          <p>Nom de l'oeuvre</p>
            <button onClick={this.Price15}>A4</button>
            <button onClick={this.Price20}>A3</button>
            <button onClick={this.Price25}>A2</button>
            <button onClick={this.Price30}>A1</button>
            <button onClick={this.Price35}>A0</button>
          <p className="Price">{this.state.price}</p>
          <button>ImagePanierAjouter au panier</button>

      </div>
    );
  }
}

export default Shop;
