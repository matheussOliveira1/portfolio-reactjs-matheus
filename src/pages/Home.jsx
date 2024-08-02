import "../App.css";
import Header from "components/Home/Header";
import Resumo from "components/Home/Resumo";
import Experiencias from "components/Home/Experiencias";
import Tecnologias from "components/Home/Tecnologias";
import Projetos from "components/Home/Projetos";
import Footer from "components/Home/Footer";
import Tooltip from "components/Home/Tooltip";

function Home() {
  return (
    <div className="App">
      <Header id="header" />
      <section id="section-index">
        <Resumo />
        <Experiencias />
        <Tecnologias />
        <Projetos />
        <Footer />
      </section>
      <Tooltip />
    </div>
  );
}

export default Home;
