import "../App.css";
import Header from "components/Home/Header";
import Resumo from 'components/Home/Resumo';
import Experiencias from 'components/Home/Experiencias';
import Tecnologias from 'components/Home/Tecnologias';
import Projetos from 'components/Home/Projetos';
import Footer from 'components/Home/Footer';

function Home() {
    return (
      <div className="App">
        <Header />
        <section id="section-index">
          <Resumo />
          <Experiencias />
          <Tecnologias />
          <Projetos />
          <Footer />
        </section>
      </div>
    );
  }
  
  export default Home;