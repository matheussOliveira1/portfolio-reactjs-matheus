import "../App.css";
import { useState } from "react";
import ButtonEmpresa from "./ButtonEmpresa";

function Experiencias() {
  const [textoExperiencias, setTextoExperiencias] = useState(
    "Na Accenture, realizei refatoração de código, interação com clientes," +
      "uso de banco de dados SQL via DBeaver, análise de dados, scripts" +
      "Python para automações e manipulação de dados em Excel, e também" +
      "trabalhei com a estruturação e criação de JSON, fortalecendo meu" +
      "conjunto de competências técnicas e interpessoais para enfrentar" +
      "desafios em projetos diversos."
  );

  return (
    <>
      <h2>Experiencias:</h2>
      <div id="container-experiencias">
        <div id="box-botoes-experiencias">
          <ButtonEmpresa empresa={`Accenture Atual`} id="acc" variable={setTextoExperiencias} cor="#FF003D"/>
          <ButtonEmpresa empresa="SPTech Academico" id="sptc" variable={setTextoExperiencias} cor="#171717"/>
        </div>
        <div id="div-box-texto-experiencias">
          <p id="p-texto-experiencias">{textoExperiencias}</p>
        </div>
      </div>
    </>
  );
}

export default Experiencias;
