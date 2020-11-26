import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";
import referendo from "../Images/referendo.jpg"

class Referendo extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Referendo</h2>

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330.">
                {" "}
                Según la ley 134, Artículo 3.{" "}
              </a>{" "}
              “Es la convocatoria que se hace al pueblo para que apruebe o
              rechace un proyecto de norma jurídica o derogue o no una norma ya
              vigente.” Al igual que en el caso de las iniciativas legislativas
              o normativas, se beben seguir los siguientes pasos:
              <br />
              <br />
              <br />
              <br />
              Cualquier⠀ciudadano puede solicitar a la Registraduría que sea
              inscrito como promotor del referendo. Una vez inscrito, la
              Registraduría entregará al⠀promotor o promotores del referendo un
              formulario para la recolección de apoyos, en el que en el que
              deberá aparecer⠀indicado el número de⠀firmas que es necesario para
              inscribir la iniciativa y un resumen del contenido de la propuesta
              para que cualquier interesado pueda leerla⠀antes de manifestar su
              apoyo con su firma.<br/> Una vez⠀entregados los formularios de
              recolección de apoyos a los promotores del referendo, contarán con
              seis meses para recolectar las⠀firmas⠀de apoyo, plazo que puede
              ser prorrogado⠀en caso de fuerza mayor o caso fortuito, hasta por
              tres meses más, en la forma⠀y por el tiempo que señale el Consejo
              Nacional Electoral.⠀El referendo puede ser tanto constitucional
              como legal.⠀El referendo deberá realizarse dentro
              de los seis meses siguientes a la⠀presentación de la solicitud.
              <br />
              <br />
             <center><strong> Resumen </strong> </center>
             <br/>
              <ul>
              <li>              
                  Solicitar a la registraduria que sea inscrito como promotor de un referendo
                </li>
                <li>
                  Inscribir la iniciativa de referendo para proceder a
                  recolectar las firmas que lo respalden que tienen que ser
                  equivalentes al 5% del censo electoral.
                </li>
                <li>              
                  Se debe construir un comité promotor y con un apoyo
                  equivalente al 0.5% del censo electoral.
                </li>
                
                <li>Ser revisado y aprobado por el congreso.</li>
              </ul>
              <br />
              <br />

             Se hace al pueblo para que apruebe o rechace un proyecto de norma jurídica o derogue o no una norma vigente. Para poder participar del refrendo debera llenar el formulario correspondiente.

            <br/>
            <br/>

             <center>       
                <img src={referendo} alt="..." id="referendo" />{" "}
            </center>
            
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

export default Referendo;
