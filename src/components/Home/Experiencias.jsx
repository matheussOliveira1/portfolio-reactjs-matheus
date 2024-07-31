import styles from "styles/Home/Experiencias.module.css";
import { useState } from "react";
import BotaoEmpresa from "./BotaoEmpresa";

function Experiencias() {
  const [textoExperiencias, setTextoExperiencias] = useState(
    "Na Accenture, realizei tarefas com refatoração de código, interação com clientes,\n" +
      "uso de banco de dados SQL via DBeaver, análise de dados, scripts\n" +
      "Python para automações e manipulação de dados em Excel, e também\n" +
      "trabalhei com a estruturação e criação de JSON, fortalecendo meu\n" +
      "conjunto de competências técnicas e interpessoais para enfrentar\n" +
      "desafios em projetos diversos."
  );

  return (
    <>
      <h2 className={styles.h2Experiencias}>Experiências:</h2>
      <div className={styles.containerExperiencias}>
        <div className={styles.boxBotoesExperiencias}>
          <BotaoEmpresa empresa="Accenture Atual" id="acc" variable={setTextoExperiencias} cor="#FF003D"/>
          <BotaoEmpresa empresa="SPTech Acadêmico" id="sptc" variable={setTextoExperiencias} cor="#171717"/>
        </div>
        <div className={styles.divBoxTextoExperiencias}>
          <p className={styles.paragrafoTextoExperiencias}>{textoExperiencias}</p>
        </div>
      </div>
    </>
  );
}

export default Experiencias;