import styles from "styles/Home/Tecnologias.module.css";

function ItemTecnologia(props) {

  return (
    <>
      <div className={styles.divSquareTecnologia}>
        <img className={styles.imgTecnologia} src={props.srcImg} alt="" />
        <span className={styles.spnTecnologia}>{props.tecnologia}</span>
      </div>
    </>
  );
  
}

export default ItemTecnologia;
