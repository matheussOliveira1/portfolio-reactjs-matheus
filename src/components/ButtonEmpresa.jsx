import "../App.css";

function ButtonEmpresa(props) {
  let setTextoExperiencias = props.variable;

  const btnEmpresa = document.getElementsByClassName(
    "btn-empresa-experiencias"
  );

  function btnClicado(e) {
    switch (e) {
      case "acc":
        setTextoExperiencias(
          "Na Accenture, realizei refatoração de código, interação com clientes,\n" +
            "uso de banco de dados SQL via DBeaver, análise de dados, scripts\n" +
            "Python para automações e manipulação de dados em Excel, e também\n" +
            "trabalhei com a estruturação e criação de JSON, fortalecendo meu\n" +
            "conjunto de competências técnicas e interpessoais para enfrentar\n" +
            "desafios em projetos diversos."
        );
        btnEmpresa[0].style.backgroundColor = "#FF003D";
        btnEmpresa[1].style.backgroundColor = "#171717";
        btnEmpresa[1].style.border = "2px solid #424141";
        break;
      case "sptc":
        setTextoExperiencias(
          "Na SPTech, desenvolvi uma plataforma com back-end em Java/Spring Boot e\n" +
            "front-end em React JS, incluindo uma REST API. Utilizei Azure para\n" +
            "hospedagem do banco de dados e deploy do front-end, e AWS para o back-end\n" +
            "em instâncias EC2. Implementei automatização de atualizações na nuvem via\n" +
            "scripts shell e integração com Jenkins. Além disso, integrei APIs externas\n" +
            "para expandir as funcionalidades e melhorar a experiência do usuário."
        );
        btnEmpresa[1].style.backgroundColor = "#FF003D";
        btnEmpresa[0].style.backgroundColor = "#171717";
        btnEmpresa[0].style.border = "2px solid #424141";
        break;
    }
  }

  return (
    <>
      <div
        id="div-btn-empresa"
        className="box-botoes-experiencias"
        onClick={(e) => btnClicado(props.id)}
      >
        <span className="btn-empresa-experiencias" style={{backgroundColor: props.cor}}></span>
        <span id="spn-botao-experiencia">{props.empresa}</span>
      </div>
    </>
  );
}

export default ButtonEmpresa;
