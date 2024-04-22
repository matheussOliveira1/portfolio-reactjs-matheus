import "../App.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import curriculo from "../assets/curriculo.png";

function Footer() {
  return (
    <>
      <h2 id="h2-contatos">Contato:</h2>
      <div id="container-footer">
        <div id="box-sociais">
          <a href="https://github.com/matheussOliveira1">
            <img className="img-social" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/matheus-oliveira-b65955243/">
            <img className="img-social" src={linkedin} />
          </a>
          <a href="https://drive.google.com/file/d/1fyOrOa8II9Uqwxn9myMWffM2Tawuq71j/view?usp=sharing">
            <img className="img-social" src={curriculo} />
          </a>
        </div>
        <div id="box-contatos">
          <span>Matheus Alves de Oliveira</span>
          <span>alvessmatheus3@gmail.com</span>
          <span>© copyright Matheus Oliveira</span>
          <span>
            icons by{" "}
            <a className="a-footer" href="https://icons8.com.br">
              Icons8
            </a>{" "}
            &{" "}
            <a className="a-footer" href="https://www.vitoracdesign.com.br/">
              VitorAcDesign
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
