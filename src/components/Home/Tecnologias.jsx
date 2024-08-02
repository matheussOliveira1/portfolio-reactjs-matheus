import styles from "styles/Home/Tecnologias.module.css";
import ItemTecnologia from "./ItemTecnologia";
import { tecnologias } from "utils/tecnologias";

function Tecnologias() {

  return (
    <>
      <h2 className={styles.h2Tecnologias} id="h2-tecnologias">
        Tecnologias:
      </h2>
      <div className={styles.containerTecnologias}>
        <div className={styles.boxTecnologias}>
          {tecnologias.map((tec, i) => (
            <ItemTecnologia
              key={i}
              srcImg={tec.srcImg}
              tecnologia={tec.tecnologia}
              width={tec.width}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
