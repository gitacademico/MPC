import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import style from "../Style/nav.css";

class Nav extends React.Component{
render(){
    return(

        <div>

        <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand"  href="/" id>
          <img src={logo} alt="..." id="logo"/>
              Cartilla Sociales</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/"> inicio <span class="sr-only">(current)</span></a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Recursos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/voto">Voto</a>
                  <a class="dropdown-item" href="/cabildoAbierto">Cabildo abierto</a>
                  <a class="dropdown-item" href="/consultaPopular">Consulta popular</a>
                  <a class="dropdown-item" href="/iniciativaPopular">Iniciativa popular</a>
                  <a class="dropdown-item" href="/plebiscito">Plebiscito</a>
                  <a class="dropdown-item" href="/referendo">Referendo</a>
                  <a class="dropdown-item" href="/revocatoriaMandato">Revocatoria de mandato</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#footer">Creadores</a>
                </div>
              </li>
            </ul>
           
          </div>
        </nav>
        </header>
</div>


    );    
}

}

export default Nav;