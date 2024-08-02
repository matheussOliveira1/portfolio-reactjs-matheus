import styles from "styles/Home/Experiencias.module.css";
import BotaoEmpresa from "./BotaoEmpresa";
import { useState } from "react";
import { empresas } from "utils/empresas";

function Experiencias() {

  const [empresaAtiva, setEmpresaAtiva] = useState(empresas[0]);

  return (
    <>
      <h2 className={styles.h2Experiencias} id="h2-experiencias">
        Experiências:
      </h2>
      <div className={styles.containerExperiencias}>
        <div className={styles.boxBotoesExperiencias}>
          <BotaoEmpresa empresa={empresas[0].nome} onClick={() => setEmpresaAtiva(empresas[0])} estilo={empresaAtiva.nome === empresas[0].nome ? styles.btnAtivado : styles.btnDesativado} />
          <BotaoEmpresa empresa={empresas[1].nome} onClick={() => setEmpresaAtiva(empresas[1])} estilo={empresaAtiva.nome === empresas[1].nome ? styles.btnAtivado : styles.btnDesativado} />
        </div>
        <div className={styles.divBoxTextoExperiencias}>
          <p className={styles.paragrafoTextoExperiencias}>
            {empresaAtiva.texto}
          </p>
        </div>
      </div>
    </>
  );
}

export default Experiencias;
