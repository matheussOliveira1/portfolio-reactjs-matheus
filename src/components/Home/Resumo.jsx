import styles from "styles/Home/Resumo.module.css";

function Resumo() {
  return (
    <>
      <h2>"nome": "Matheus Alves de Oliveira"</h2>
      <div className={styles.containerResumo}>
        <a className={styles.caractereChaveResumo}>&#123;</a>
        <p className={styles.paragrafoResumo}>
          “Com vinte anos, sou formado em Análise e Desenvolvimento de Sistemas
          pela São Paulo Tech School. Tenho experiência no mercado de tecnologia
          desde agosto de 2022 e dois anos de acadêmico.
          <br />
          <br />
          Minha paixão é desenvolver. Quero poder contribuir para a evolução da
          indústria de software e estou pronto para novos desafios e
          oportunidades!”
        </p>
        <a className={styles.caractereChaveResumo}>&#125;</a>
      </div>
    </>
  );
}

export default Resumo;
