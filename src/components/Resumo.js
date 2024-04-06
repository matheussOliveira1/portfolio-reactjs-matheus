import "../App.css";

function Resumo() {
  return (
    <>
      <h2>"nome": "Matheus Alves de Oliveira"</h2>
      <div className="container-resumo">
        <a className="a-caractere-chave-resumo">&#123;</a>
        <p className="p-resumo">
          “Com vinte anos, sou formado em Análise e Desenvolvimento de Sistemas
          pela São Paulo Tech School. Tenho experiência no mercado de tecnologia
          desde agosto de 2022 e dois anos de acadêmico.
          <br />
          <br />
          Minha paixão é desenvolver. Quero contribuir para a evolução da
          indústria de software e estou pronto para novos desafios e
          oportunidades!”
        </p>
        <a className="a-caractere-chave-resumo">&#125;</a>
      </div>
    </>
  );
}

export default Resumo;
