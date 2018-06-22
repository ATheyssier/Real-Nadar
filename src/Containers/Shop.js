import React, { Component } from 'react'
import PhotoMeuf from '../Icones/Nadar-Sarah-Bernhardt.jpg'
import HomePage from '../Containers/Home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Style/shop.css'
import caddie from '../Icones/caddie_shopping_icon-icons.com_49917.png'


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price1: '15€',
      price2: '18€',
      price3: '20€'
    };
  }

  Price1 = () => {
    this.setState({price1: '15€'})
  }
  Price2 = () => {
    this.setState({price1: '25€'})
  }
  Price3 = () => {
    this.setState({price1: '35€'})
  }
  Price4 = () => {
    this.setState({price1: '45€'})
  }
  Price5 = () => {
    this.setState({price1: '55€'})
  }
  Price6 = () => {
    this.setState({price2: '18€'})
  }
  Price7 = () => {
    this.setState({price2: '28€'})
  }
  Price8 = () => {
    this.setState({price2: '38€'})
  }
  Price9 = () => {
    this.setState({price2: '48€'})
  }
  Price10 = () => {
    this.setState({price2: '58€'})
  }
  Price11 = () => {
    this.setState({price3: '20€'})
  }
  Price12 = () => {
    this.setState({price3: '30€'})
  }
  Price13 = () => {
    this.setState({price3: '40€'})
  }
  Price14 = () => {
    this.setState({price3: '50€'})
  }
  Price15 = () => {
    this.setState({price3: '60€'})
  }


  render() {
    return (
      <div className="Shop">
      <Link to="/panier"><button className="btn2"><img src={caddie}/></button></Link>
        <h1>BOUTIQUE</h1>
        <p className='zozo'>Retrouver toutes les reproductions des oeuvres en tirage haute qualité</p>
        <div className="SearchBar">
          <input type="text" />
          <button>ImageLoupe</button>
        </div>
          <br />
          <img className='foto' src={PhotoMeuf} />
          <p className='zizou'>Nom de l'oeuvre</p>
          <div className='btn1'>
            <button onClick={this.Price1}>A4</button>
            <button onClick={this.Price2}>A3</button>
            <button onClick={this.Price3}>A2</button>
            <button onClick={this.Price4}>A1</button>
            <button onClick={this.Price5}>A0</button>
          </div>
          <p className="Price">{this.state.price1}</p>
            <button className='pipo'><img src={caddie}/>
              Ajouter au panier</button>
          <hr />
          <img className='foto' src={PhotoMeuf} />
          <p className='zizou'>Nom de l'oeuvre</p>
          <div className='btn1'>
            <button onClick={this.Price6}>A4</button>
            <button onClick={this.Price7}>A3</button>
            <button onClick={this.Price8}>A2</button>
            <button onClick={this.Price9}>A1</button>
            <button onClick={this.Price10}>A0</button>
          </div>
          <p className="Price">{this.state.price2}</p>
            <button className='pipo'><img src={caddie}/>
              Ajouter au panier</button>
          <hr />
          <img className='foto' src={PhotoMeuf} />
          <p className='zizou'>Nom de l'oeuvre</p>
          <div className='btn1'>
            <button onClick={this.Price11}>A4</button>
            <button onClick={this.Price12}>A3</button>
            <button onClick={this.Price13}>A2</button>
            <button onClick={this.Price14}>A1</button>
            <button onClick={this.Price15}>A0</button>
          </div>
          <p className="Price">{this.state.price3}</p>
          <button className='pipo'><img src={caddie}/>
            Ajouter au panier</button>

      </div>
    );
  }
}

export default Shop;
