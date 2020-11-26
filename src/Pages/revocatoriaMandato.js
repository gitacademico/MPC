import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class RevocatoriaMandato extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Revocatoria de mandato</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=Revocado%20el%20mandato%20a%20un,los%20resultados%20de%20la%20votación.">
                Ley 134 de 1994
              </a>{" "}
              “La revocatoria del mandato es un derecho político, por medio del
              cual los ciudadanos pueden dar por terminado el mandato que le han
              conferido a un gobernador o a un alcalde.”
            
              <br />
              <br />
              Para solicitar⠀la revocatoria del mandato de un mandatario, un
              número⠀de ciudadanos, mayor al 40% del total de los votos válidos
              emitidos en la elección del respectivo mandatario, debe solicitar
              con⠀su firma ante la Registraduría del Estado Civil
              correspondiente, la convocatoria a la votación para la revocatoria
              del⠀mandato de un gobernador o un alcalde.
              Los⠀ciudadanos colombianos mayores de 18 años, que sean habitantes del municipio o departamento en el que se⠀realizará la revocatoria de mandato que estén inscritos en el censo electoral del municipio o⠀departamento.
              <br />
              <br />
              Una vez se⠀entienda que esta solo es válida para
              gobernadores⠀o alcaldes y NO para el presidente, la ciudadanía puede hacer uso de
              este mecanismo⠀para dar por terminado el mandato que se le dió tiempo atrás. Para
              hacer una petición⠀válida se debe contar con mínimo el una cantidad de firmas
              equivalente al 40%⠀de votos válidos emitidos para el funcionario en cuestión. También
              se debe contar con⠀que debe tener mínimo un año en el poder. Una vez validadas las
              firmas se tendrán⠀dos meses para convocar a las votaciones en las cuales se decidirá
              si se derrocará al⠀funcionario o no.
              <br />
              <br />
              La solicitud de⠀revocatoria⠀de mandato procederá siempre y cuando haya pasado minimo un año, contado a partir desde que⠀toma ese⠀lugar como mandatario,⠀Los ciudadanos interesados en solicitar que su alcalde o gobernador⠀sea⠀retirado de su cargo deben acudir a la Registraduría Nacional del Estado Civil, 
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

export default RevocatoriaMandato;
