import './App.css'; //Import src/App.css; "." quer dizer "pasta atual"
import HelloWorld from './components/HelloWorld';
import Soma from './components/Soma';
import SayMyName from './components/SayMyName';

function App() {

  const name = "Julinha"
  return (
    <div className='App'>
      <HelloWorld/>


      <Soma n1="1" n2="2"/>


      <h1><SayMyName nome="Thomas"/></h1>
      <h1><SayMyName nome="Mesquitinha"/></h1>
      <h1><SayMyName nome={name}/></h1>

    </div>
  );
}

export default App;
/* Exportando o componente, mandando ele pra frente
Export é o ato de disponibilizar esse arquivo/componente, para que outros possam utilizá-los, EX:
criei um componente que é uma imagem, eu exporto essa imagem, para que possa importar ela em outro arquivo e utilizá-la.*/