import styles from "styles/Home/Footer.module.css";
import github from "assets/github.png";
import linkedin from "assets/linkedin.png";
import curriculo from "assets/curriculo.png";

function Footer() {
  return (
    <>
      <h2>Contato:</h2>
      <div className={styles.containerFooter}>
        <div className={styles.boxSociais}>
          <a href="https://github.com/matheussOliveira1">
            <img className={styles.imgSocial} src={github} />
          </a>
          <a href="https://www.linkedin.com/in/matheus-oliveira-b65955243/">
            <img className={styles.imgSocial} src={linkedin} />
          </a>
          <a href="https://drive.google.com/file/d/1fyOrOa8II9Uqwxn9myMWffM2Tawuq71j/view?usp=sharing">
            <img className={styles.imgSocial} src={curriculo} />
          </a>
        </div>
        <div className={styles.boxContatos}>
          <span>Matheus Alves de Oliveira</span>
          <span>alvessmatheus3@gmail.com</span>
          <span>© copyright Matheus Oliveira</span>
          <span>
            icons by{" "}
            <a className={styles.aFooter} href="https://icons8.com.br">
              Icons8
            </a>{" "}
            &{" "}
            <a className={styles.aFooter} href="https://www.vitoracdesign.com.br/">
              VitorAcDesign
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;