import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import leon from "../img/Leon.png";
import "../public/css.css";
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src={leon} alt="Page non trouvée" className="notFoundImage mt-3"/>
   
      <h1>Ne fais aucun geste brusque et fais demi-tour, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil 
      </Link>(Vivement conseillé)
    </div>
  );
}
  
export default PageNotFound;