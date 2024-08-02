import { Link } from "react-scroll";
import styles from "styles/Home/Header.module.css";

function Header() {
  return (
    <>
      <header id="header-link-popup">
        <Link className="header-link" to="h2-experiencias" smooth={true} offset={-10}>Experiências</Link>
        <Link className="header-link" to="h2-tecnologias" smooth={true} offset={-10}>Tecnologias</Link>
        <Link className="header-link" to="h2-projetos" smooth={true} offset={-10}>Projetos</Link>
        <Link className="header-link" to="h2-footer" smooth={true}>Contato</Link>
      </header>
    </>
  );
}

export default Header;
