import "../App.css";
import ItemTecnologia from "./ItemTecnologia";
import logoJs from "../assets/logo-js.png";
import nodeJS from "../assets/node-js.png";
import java from "../assets/java.jpg";
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
          <ItemTecnologia
            srcImg={logoJs}
            tecnologia="JavaScript"
            width="45px"
          />
          <ItemTecnologia srcImg={nodeJS} tecnologia="NodeJS" width="45px" />
          <ItemTecnologia srcImg={java} tecnologia="Java" width="45px" />
          <ItemTecnologia
            srcImg={springboot}
            tecnologia="Spring Boot"
            width="45px"
          />
          <ItemTecnologia srcImg={html5} tecnologia="HTML5" width="90px" />
          <ItemTecnologia srcImg={css3} tecnologia="CSS3" width="65px" />
          <ItemTecnologia srcImg={reactjs} tecnologia="ReactJS" width="60px" />
          <ItemTecnologia srcImg={kotlin} tecnologia="Kotlin" width="45px" />
          <ItemTecnologia srcImg={docker} tecnologia="Docker" width="45px" />
          <ItemTecnologia srcImg={sql} tecnologia="SQL" width="110px" />
          <ItemTecnologia srcImg={aws} tecnologia="AWS" width="45px" />
          <ItemTecnologia srcImg={azure} tecnologia="Azure" width="45px" />
          <ItemTecnologia srcImg={git} tecnologia="Git" width="45px" />
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
