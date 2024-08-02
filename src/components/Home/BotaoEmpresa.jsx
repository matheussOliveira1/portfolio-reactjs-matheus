import styles from "styles/Home/Experiencias.module.css";

function BotaoEmpresa(props) {
  return (
    <>
      <div className={styles.boxBotoesExperienciasBotao} onClick={props.onClick}>
        <span className={props.estilo}></span>
        <span className={styles.spnBotaoExperiencia}>{props.empresa}</span>
      </div>
    </>
  );
}

export default BotaoEmpresa;
