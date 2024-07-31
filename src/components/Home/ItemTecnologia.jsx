import styles from "styles/Home/Tecnologias.module.css";

function ItemTecnologia(props) {
  console.log(document.getElementById("spn-tecnologia"));

  return (
    <>
      <div className={styles.divSquareTecnologia}>
        <img className={styles.imgTecnologia} src={props.srcImg} style={{ width: props.width }} />
        <span className={styles.spnTecnologia}>{props.tecnologia}</span>
      </div>
    </>
  );
}

export default ItemTecnologia;
