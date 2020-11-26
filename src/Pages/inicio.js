import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class Inicio extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Los mecanismos de participación ciudadana</h2>
            <br />
            <br />

            <p class="texto">
              <strong>Los mecanismos de participación ciudadana </strong>
              son herramientas al alcance de todos los colombianos para ejercer
              con ellos el derecho a participar del poder político, mediante el
              voto, el plebiscito, el referendo, la consulta popular, el cabildo
              abierto, la iniciativa legislativa y la revocatoria del mandato.
              Esto da al ciudadano colombiano la posibilidad de participar de
              muchas de las decisiones que afectarán al país ya sea positiva o
              negativamente.
              <br />
              <br />
            </p>

            <p class="texto">
              <ul>
                <li>El voto</li>
                <li>Plebiscito</li>
                <li>Iniciativa popular legislativa</li>
                <li>Referendo</li>
                <li>Revocatoria de mandato</li>
                <li>Cabildo abierto</li>
                <li>Consulta popular</li>
                <br />
                <br />
              </ul>
            </p>

            <p class="texto">
              Según el{" "}
              <a href="https://www.mincit.gov.co/ministerio/normograma-sig/procesos-estrategicos/gestion-de-informacion-y-comunicacion/constitucion-politica/derechos/articulo-103.aspx#:~:text=Son%20mecanismos%20de%20participación%20del,y%20la%20revocatoria%20del%20mandato.">
                Articulo 103 de la constitución Política de 1991,
              </a>{" "}
              el Estado es el encargado de organizar, promover y capacitar a los
              diferentes sectores de la comunidad para hacer un adecuado uso de
              estos mecanismos, y, así garantizar un entorno demócratico digno.
              <br />
              <br />
            </p>

            <p class="texto">
              Con la siguiente información se le dará a concocer cómo y cuándo
              puedo hacer uso de estos recursos, de una manera resumida y clara
              para su fácil entendimiento.
              <br/>
              <strong>Ir a la barra superior donde dice recursos para seguir con el proceso </strong> <br />
              <br />
            </p>
            {/*-Según la página de la Registradora Nacional del Estado civil aparece que 

De acuerdo con el artículo 103 de la Constitución Colombiana, “son mecanismos de participación del pueblo en ejercicio de su soberanía: el voto,
 el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato”.
En todos los casos de mecanismos de participación expuestos anteriormente,
 de acuerdo con el artículo 103 de la Constitución Colombiana: “El Estado contribuirá a la organización, promoción 
  y capacitación de las asociaciones profesionales, cívicas, sindicales, comunitarias, juveniles, benéficas o de utilidad
 común no gubernamentales, sin detrimento de su autonomía con el objeto de que constituyan mecanismos democráticos de 
representación en las diferentes instancias de participación, concertación, control y vigilancia de la gestión pública que se establezcan”.
De igual manera, todos están reglamentados bajo la Ley 134 de 1994, la cual expone paso a paso los requerimientos
y las etapas de los mecanismos y “establece las normas fundamentales por las que se regirá la participación democrática de las organizaciones civiles”.
 */}
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Inicio;
