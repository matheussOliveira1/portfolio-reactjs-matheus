import styles from "styles/Home/Projetos.module.css";
import ItemProjeto from "./ItemProjeto";
import { projetos } from "utils/projetos";

function Projetos() {
  return (
    <>
      <h2 id="h2-projetos">Projetos:</h2>
      <div className={styles.containerProjetos}>
        <div className={styles.boxProjetos}>
          {projetos.map((proj, i) => (
            <ItemProjeto
              key={i}
              nome={proj.nome}
              descricao={proj.descricao}
              hrefProjeto={proj.hrefProjeto}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;
