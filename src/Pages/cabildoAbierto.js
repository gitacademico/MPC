import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

class CabildoAbierto extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div  className="row">
          <div className="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Cabildo Abierto</h2>
            <br />
            <br />

            <p  className="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=-%20Cabildo%20abierto.,de%20interés%20para%20la%20comunidad.">
                {" "}
                La ley 134
              </a>{" "}
             <q>El cabildo abierto es la reunión pública de los concejos
              distritales, municipales o de las juntas administradoras locales,
              en la cual los habitantes pueden participar directamente con el
              fin de discutir asuntos de interés para la comunidad.</q>
              <br />
              <br />
              Esta es una reunión las cuales se juntan los administrativos con
              los habitantes para participar activamente sobre temas de interés.
              <br />
              <br />
              Se puede convocar tanto por los representantes del municipio, región
etc en cuestión como por los ciudadanos, siempre y cuando sean una cantidad superior
al 5% de los ciudadanos registrados en el censo electoral.
              <br />
              <br />
               Una vez hecha una petición
válida se tendrá que realizar en un tiempo no mayor a un mes desde que se realiza
esta, y es de obligación del alcalde o gobernador de hacer presencia.
Iniciativa popular legislativa: Cualquier persona o grupo social puede convocar este
mecanismo de participación, y para hacerlo debe diligenciar un formato que es
diseñado Registraduría en el cual debe llenar los siguientes datos:
<br/>
<br/>

<ul>
 <li>El nombre completo, número de documento de identificación y dirección de
notificaciones del promotor o los miembros del comité promotor. </li>
<li>El título que describa la propuesta de mecanismo de participación ciudadana. </li>
<li>La exposición de motivos que sustenta la propuesta. </li>
<li>La propuesta de articulado, salvo en el caso de las propuestas de revocatoria de
mandato. </li>
 </ul>            
              <br />
            
            </p>

            <p class="texto"></p>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default CabildoAbierto;
