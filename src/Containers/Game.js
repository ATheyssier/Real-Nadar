import React, { Component } from 'react'
import PointI from '../Icones/point-dinterrogation.jpg'
import Nsb01 from '../Icones/Nadar-Sarah-Bernhardt_01.jpg'
import Nsb02 from '../Icones/Nadar-Sarah-Bernhardt_02.jpg'
import Nsb03 from '../Icones/Nadar-Sarah-Bernhardt_03.jpg'
import Nsb04 from '../Icones/Nadar-Sarah-Bernhardt_04.jpg'
import Nsb05 from '../Icones/Nadar-Sarah-Bernhardt_05.jpg'
import Nsb06 from '../Icones/Nadar-Sarah-Bernhardt_06.jpg'
import Nsb07 from '../Icones/Nadar-Sarah-Bernhardt_07.jpg'
import Nsb08 from '../Icones/Nadar-Sarah-Bernhardt_08.jpg'
import Nsb09 from '../Icones/Nadar-Sarah-Bernhardt_09.jpg'
import Nsb10 from '../Icones/Nadar-Sarah-Bernhardt_10.jpg'
import Nsb11 from '../Icones/Nadar-Sarah-Bernhardt_11.jpg'
import Nsb12 from '../Icones/Nadar-Sarah-Bernhardt_12.jpg'

import '../Style/App.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageSrc1: PointI,
      ImageSrc2: PointI,
      ImageSrc3: PointI,
      ImageSrc4: PointI,
      ImageSrc5: PointI,
      ImageSrc6: PointI,
      ImageSrc7: PointI,
      ImageSrc8: PointI,
      ImageSrc9: PointI,
      ImageSrc10: PointI,
      ImageSrc11: PointI,
      ImageSrc12: PointI
    };
  }

  Picture1 = () => {
    this.setState({ImageSrc1: Nsb01})
  }

  Picture2 = () => {
    this.setState({ImageSrc2: Nsb02})
  }

  Picture3 = () => {
    this.setState({ImageSrc3: Nsb03})
  }

  Picture4 = () => {
    this.setState({ImageSrc4: Nsb04})
  }

  Picture5 = () => {
    this.setState({ImageSrc5: Nsb05})
  }

  Picture6 = () => {
    this.setState({ImageSrc6: Nsb06})
  }

  Picture7 = () => {
    this.setState({ImageSrc7: Nsb07})
  }

  Picture8 = () => {
    this.setState({ImageSrc8: Nsb08})
  }

  Picture9 = () => {
    this.setState({ImageSrc9: Nsb09})
  }

  Picture10 = () => {
    this.setState({ImageSrc10: Nsb10})
  }

  Picture11 = () => {
    this.setState({ImageSrc11: Nsb11})
  }

  Picture12 = () => {
    this.setState({ImageSrc12: Nsb12})
  }

  Randomize = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(13))
    this[`Picture${randomNumber}`]()
  }

  Win = () => {
    const content = document.getElementById('Jpp').value.toLowerCase()

    if (content === 'nadar sarah bernhardt') {
      return alert('GG You won!')
    } else {
      return alert(`T'es une merde, idiot`)
    }
  }

  render() {
    return (
      <div className="Game">
        <h1>JEU CONCOURS</h1>
        <table>
          <tbody>
          <tr>
            <td><img src={this.state.ImageSrc1} alt=''/></td>
            <td><img src={this.state.ImageSrc2} alt=''/></td>
            <td><img src={this.state.ImageSrc3} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc4} alt=''/></td>
            <td><img src={this.state.ImageSrc5} alt=''/></td>
            <td><img src={this.state.ImageSrc6} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc7} alt=''/></td>
            <td><img src={this.state.ImageSrc8} alt=''/></td>
            <td><img src={this.state.ImageSrc9} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc10} alt=''/></td>
            <td><img src={this.state.ImageSrc11} alt=''/></td>
            <td><img src={this.state.ImageSrc12} alt=''/></td>
          </tr>
        </tbody>
        </table>
        <p>Trouver le nom de la personnalité prise en photo par Nadar</p>
        <input type="text" id="Jpp" placeholder="Nom et Prénom"/>
        <br />
        <button onClick={this.Randomize} className="Indice">INDICE</button>
        <button onClick={this.Win} className="Valider">VALIDER</button>
      </div>
    );
  }
}

export default Game;
