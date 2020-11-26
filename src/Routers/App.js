import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Inicio from "../Pages/inicio";
import Voto from "../Pages/voto";
import Plebiscito from "../Pages/plebiscito";
import RevocatoriaMandato from "../Pages/revocatoriaMandato"
import Referendo from "../Pages/referendo";
import CabildoAbierto from "../Pages/cabildoAbierto";
import ConsultaPopular from "../Pages/consultaPopular";
import IniciativaPopular from "../Pages/iniciativaPopular"

const App =()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/voto" component={Voto} />
        <Route exact path="/plebiscito" component={Plebiscito} />
        <Route exact path="/revocatoriaMandato" component={RevocatoriaMandato} />
        <Route exact path="/referendo" component={Referendo} />
        <Route exact path="/cabildoAbierto" component={CabildoAbierto} />
        <Route exact path="/consultaPopular" component={ConsultaPopular} />
        <Route exact path="/iniciativaPopular" component={IniciativaPopular} />


      </Switch>
    </BrowserRouter>
  )
}

export default App;