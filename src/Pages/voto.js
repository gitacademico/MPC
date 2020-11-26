import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";
import votoCol from "../Images/votoCol.png";

class Voto extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Voto</h2>
            <br />
            <br />

            <p class="texto">
              Voto:
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8620#:~:text=Artículo%20258.,de%20medios%20electrónicos%20o%20informáticos.">
                {" "}
                Artículo 258. “El voto es un derecho y un deber ciudadano”.
              </a>
              Constitución Política de Colombia [Const]. Artículo 258 de 1994
              (Colombia).
              <br />
              <br />
              El voto es el mecanismo por el cual un individuo expresa apoyo por
              cierta propuesta, candidato, o selección de candidatos durante una
              votación, de forma secreta o pública. La votación es convocada por
              el Estado, y normalmente en Colombia se realiza cada 4 años.
              <br />
              <br />
              <center>
                {" "}
                <img src={votoCol} alt="..." id="votoCol" />{" "}
              </center>
              <br />
              <br />
              Un ciudadano lo que debe hacer para poder votar tiene que tener en
              cuenta los siguientes aspectos:
              <br />
              Ser mayor de edad, tener cedula, saber donde le toca votar, saber
              por quien votar.
              <br />
              El ciudadano debera acercarse con su cedula al lugar de votación
              que le toca (esto lo puede buscar{" "}
              <a href="https://www.registraduria.gov.co/consulte-su-lugar-de-votacion,11710.html">
                dando clic en este enlace
              </a>
              ) tambien debera votar en las fechas establecidas por la
              registraduria, el proceso para hacer esto despues de tener todo lo
              anterior claro es el siguiente:
              <br />
              <br />
              <ul>
                <li>Saber dónde le toca votar. </li>
                <li>Saber el horario en el que tiene que votar.</li>
                <li>Tener la cédula de ciudadanía.</li>
                <li>Marcar el tarjetón.</li>
                <li>Depositar el tarjetón.</li>
              </ul>
              <br />
            </p>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Voto;
