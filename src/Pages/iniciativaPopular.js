import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class IniciativaPopular extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Iniciativa popular</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=La%20iniciativa%20popular%20legislativa%20y%20normativa%20ante%20las%20corporaciones%20públicas,Municipales%20o%20Distritales%20y%20de">
                Según la ley 134, Artículo 2{" "}
              </a>{" "}
              “La iniciativa popular legislativa y normativa ante las
              corporaciones públicas es el derecho político de un grupo de
              ciudadanos de presentar Proyecto de Acto legislativo y de ley ante
              el Congreso de la República, de Ordenanza ante las Asambleas
              Departamentales, de Acuerdo ante los Concejos Municipales o
              Distritales y de Resolución ante las Juntas Administradoras
              Locales, y demás resoluciones de las corporaciones de las
              entidades territoriales, de acuerdo con las leyes que las
              reglamentan, según el caso, para que sean debatidos y
              posteriormente aprobados, modificados o negados por la corporación
              pública correspondiente.”
              <br />
              <br />
              Para realizar una iniciativa popular legislativa se debe realizar
              primero la inscripción de un comité de promotores (grupo de personas para que ayuden a difundir la iniciativa), que tiene que
              tener un respaldo en firmas equivalente al 0.5% del censo
              electoral, para posteriormente inscribirla iniciativa, la cual
              también debe estar apoyada con firmas, pero equivalentes al 5% del
              censo electoral, las cuales serán revisadas por la Registraduría y
              una vez pase el umbral, este mecanismos procederá a ser estudiado
              por el congreso para definir si es aprobado o no.
              <br />
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

export default IniciativaPopular;
