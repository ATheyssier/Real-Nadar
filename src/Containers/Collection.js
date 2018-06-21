import React, { Component } from 'react'
import image1 from  '../Icones/Nadar-Sarah-Bernhardt.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image2 from '../Icones/point-dinterrogation.jpg'

import '../Style/App.css'

class Collection extends Component {
render() {
  return(
    <div className='Collection'>

      <h1>TROUVER LES OEUVRES</h1>

      <p> Déhambulez dans l’exposition et rester attentif :
      votre téléphone se mettra à vibrer à
      proximiter des oeuvres avec un point d’intérêt.. à vous de jouer
      </p>

        <hr/>

      <div className="Les_Nadars_par_les_Nadars">
        <h3>Les Nadars par les Nadars</h3>
        <table>
          <tbody>
            <tr>
              <td><Link to="/details"><img src={image1} alt='Nadar-Sarah-Bernhardt'/></Link></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
            </tr>
        </tbody>
        </table>
        <input className='button' type='button' value='UTILISER LE SCAN'/>
      </div>

      <div className="Les_Portraits_entre_art_et_indutrie">
        <h3>Les portraits entre art et industrie</h3>
        <table>
          <tbody>
            <tr>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
            </tr>
        </tbody>
        </table>
        <input className='button' type='button' value='UTILISER LE SCAN'/>
      </div>

      <div className="Au_dela_du_portrait_virgule_la_promotion_de_la_photographie">
        <h3>Au delà du portrait, la promotion de la photographie</h3>
        <table>
          <tbody>
            <tr>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
              <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
            </tr>
        </tbody>
        </table>
        <input className='button' type='button' value='UTILISER LE SCAN'/>
      </div>

    </div>
    );
  }
}

export default Collection;
