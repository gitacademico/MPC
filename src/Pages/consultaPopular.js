import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";
import cons from "../Images/Consultapopular.jpg";

class ConsultaPopular extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Consulta popular</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330">
                La Ley 134 de 1994
              </a>
              : “la consulta popular es la institución mediante la cual, una
              pregunta de carácter general sobre un asunto de trascendencia
              nacional, departamental, municipal, distrital o local, es sometida
              por el Presidente de la República, el gobernador o el alcalde,
              según el caso, a consideración del pueblo para que éste se
              pronuncie formalmente al respecto”.
              <br />
              <br />
              Es donde los dirigentes le preguntan al pueblo sobre un asunto en
              específico sobre una acción del presidente o algún otro gobernante
              para saber nuestra opinión ya sea a favor o en contra de lo que
              sea que nos esten reuniendo.
              <br />
              <br />
              Imagen ejemplo: <br />{" "}
              <div className="imagen">
                <img src={cons} alt="..." className="ejemplos" />
                <br />{" "}
                <a
                  href="www.registraduria.gov.co.
                  https://www.registraduria.gov.co/-Tarjeta-de-electoral,2911-.html
                  "
                >
                  {" "}
                  <p class="citas">
                    Tarjeta-de-electoral. (2011, 27 abril). <br />
                    [Ilustración].
                  </p>
                </a>{" "}
                <br />
              </div>
              <br />
              Las consultas populares sobre temas que tengan que ver con toda el
              país tendra que ser convocadas por el Congreso del país a petición
              de:
              <ul>
                <li>1) el Presidente de la República. </li>
                <li>
                  {" "}
                  2) el equivalente al 33% de los integrantes de cualquiera de
                  las Cámaras del Congreso del país{" "}
                </li>
                <li>
                  {" "}
                  3) los ciudadanos, en un número equivalente, al menos, al 5%
                  de los inscritos en la lista nominal de electores.
                </li>
              </ul>
              <br />
              <br />
            </p>
            <p>
              Una vez se aprueba la consulta popular se prosigue a realizar la
              votación, el ciudadano tiene que ser mayor de edad y cumplir con
              los siguientes requisitos o seguir las siguientes recomendaciones:
              <ul>
                <li>Saber dónde le toca votar. </li>
                <li>Saber el horario en el que tiene que votar.</li>
                <li>Tener la cédula de ciudadanía.</li>
                <li>Marcar el tarjetón.</li>
                <li>Depositar el tarjetón.</li>
              </ul>
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

export default ConsultaPopular;
