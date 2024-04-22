import "../App.css";
import ItemProjeto from "./ItemProjeto";

function Projetos() {
  return (
    <>
      <h2 id="h2-projetos">Projetos:</h2>
      <div id="container-projetos">
        <div id="box-projetos">
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
