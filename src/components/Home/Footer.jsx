import styles from "styles/Home/Footer.module.css";
import github from "assets/github.png";
import linkedin from "assets/linkedin.png";
import curriculo from "assets/curriculo.png";

function Footer() {
  return (
    <>
      <h2 id="h2-footer" style={{marginBottom: 0}}>Contato:</h2>
      <div className={styles.containerFooter}>
        <div className={styles.boxSociais}>
          <a href="https://github.com/matheussOliveira1">
            <img className={styles.imgSocial} src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-oliveira-b65955243/">
            <img className={styles.imgSocial} src={linkedin} alt="" />
          </a>
          <a href="https://drive.google.com/file/d/1dPFl18j13FcmGTKob0igk1Ae_6wAMvx8/view?usp=sharing">
            <img className={styles.imgSocial} src={curriculo} alt="" />
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
