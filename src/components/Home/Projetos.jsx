import styles from "styles/Home/Projetos.module.css";
import ItemProjeto from "./ItemProjeto";

function Projetos() {
  return (
    <>
      <h2>Projetos:</h2>
      <div className={styles.containerProjetos}>
        <div className={styles.boxProjetos}>
          <ItemProjeto
            nome="Portfólio"
            descricao="Meu portfólio desenvolvido com React JS, JavaScript, HTML e CSS. Utilizando essas tecnologias, realizei o desenvolvimento deste site responsivo e dinâmico."
            hrfeProjeto=""
          />
          <ItemProjeto
            nome="Lorem ipsum"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolor non. Libero rem, quisquam cum nihil quo dolorum pariatur totam beatae deserunt maxime architecto qui eligendi vel aliquam asperiores perspiciatis."
            hrfeProjeto=""
          />
          <ItemProjeto
            nome="Lorem ipsum"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolor non. Libero rem, quisquam cum nihil quo dolorum pariatur totam beatae deserunt maxime architecto qui eligendi vel aliquam asperiores perspiciatis."
            hrfeProjeto=""
          />
          <ItemProjeto
            nome="Lorem ipsum"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolor non. Libero rem, quisquam cum nihil quo dolorum pariatur totam beatae deserunt maxime architecto qui eligendi vel aliquam asperiores perspiciatis."
            hrfeProjeto=""
          />
        </div>
      </div>
    </>
  );
}

export default Projetos;
