import './App.css'; //Import src/App.css; "." quer dizer "pasta atual"
import HelloWorld from './components/HelloWorld';
import Soma from './components/Soma';
import SayMyName from './components/SayMyName';
import Pessoa from  './components/Pessoa';
import Frase from "./components/Frase"
import List from "./components/List"

function App() {

  const name = "Julinha"
  return (
    <div className='App'>
      <Frase/>

      <Soma n1={5} n2={23}/>

      <Pessoa 
      nome="Thomas" 
      idade="19" 
      profissao="Programador Sênior"
      foto="https://via.placeholder.com/150" />

      <List/>

    </div>
  );
}

export default App;
/* Exportando o componente, mandando ele pra frente
Export é o ato de disponibilizar esse arquivo/componente, para que outros possam utilizá-los, EX:
criei um componente que é uma imagem, eu exporto essa imagem, para que possa importar ela em outro arquivo e utilizá-la.*/