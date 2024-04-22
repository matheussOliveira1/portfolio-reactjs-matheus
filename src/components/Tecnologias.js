import "../App.css";
import ItemTecnologia from "./ItemTecnologia";
import logoJs from "../assets/logo-js.png";
import nodeJS from "../assets/node-js.png";
import java from "../assets/java.png";
import springboot from "../assets/springboot.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import reactjs from "../assets/reactjs.png";
import kotlin from "../assets/kotlin.png";
import docker from "../assets/docker.png";
import sql from "../assets/sql.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import git from "../assets/git.png";

function Tecnologias() {
  return (
    <>
      <h2>Tecnologias:</h2>
      <div id="container-tecnologias">
        <div id="box-tecnologias">
          <ItemTecnologia srcImg={logoJs} tecnologia="JavaScript" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={nodeJS} tecnologia="NodeJS" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={java} tecnologia="Java" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={springboot} tecnologia="Spring Boot" width="71px" /*https://www.vitoracdesign.com.br/*/ />
          <ItemTecnologia srcImg={html5} tecnologia="HTML5" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={css3} tecnologia="CSS3" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={reactjs} tecnologia="ReactJS" /*https://www.vitoracdesign.com.br/*/ />
          <ItemTecnologia srcImg={kotlin} tecnologia="Kotlin" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={docker} tecnologia="Docker" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={sql} tecnologia="SQL" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={aws} tecnologia="AWS" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={azure} tecnologia="Azure" /*https://icons8.com.br/*/ />
          <ItemTecnologia srcImg={git} tecnologia="Git" /*https://icons8.com.br/*/ />
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
