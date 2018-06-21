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

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {ImageSrc: {PointI}};
  }

  Picture1 = () => {
    this.setState({ImageSrc: {Nsb01}})
  }

  Picture2 = () => {
    this.setState({ImageSrc: {Nsb02}})
  }

  Picture3 = () => {
    this.setState({ImageSrc: {Nsb03}})
  }

  Picture4 = () => {
    this.setState({ImageSrc: {Nsb04}})
  }

  Picture5 = () => {
    this.setState({ImageSrc: {Nsb05}})
  }

  Picture6 = () => {
    this.setState({ImageSrc: {Nsb06}})
  }

  Picture7 = () => {
    this.setState({ImageSrc: {Nsb07}})
  }

  Picture8 = () => {
    this.setState({ImageSrc: {Nsb08}})
  }

  Picture9 = () => {
    this.setState({ImageSrc: {Nsb09}})
  }

  Picture10 = () => {
    this.setState({ImageSrc: {Nsb10}})
  }

  Picture11 = () => {
    this.setState({ImageSrc: {Nsb11}})
  }

  Picture12 = () => {
    this.setState({ImageSrc: {Nsb12}})
  }

  render() {
    return (
      <div className="Game">
        <h1>JEU CONCOURS</h1>
        <table>
          <tbody>
          <tr>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
          </tr>
          <tr>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
            <td><img src={this.state.ImageSrc} alt=''/></td>
          </tr>
        </tbody>
        </table>
        <p>Trouver le nom de la personnalité prise en photo par Nadar</p>
        <input type="text" />
        <br />
        <button>INDICE</button>
        <button>VALIDER</button>
      </div>
    );
  }
}

export default Game;
