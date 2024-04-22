import './App.css';
import Header from './components/Header';
import Resumo from './components/Resumo';
import Experiencias from './components/Experiencias';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="App">
      <Header />
      <Resumo />
      <Experiencias />
      <Tecnologias />
      <Projetos />
    </div>
  );
}

export default App;
