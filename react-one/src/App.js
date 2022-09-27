import './App.css'; //Import src/App.css; "." quer dizer "pasta atual"
import Evento from './components/Evento';
import Forms from './components/Forms'
import Condicional from './components/Condicional'

function App() {

  return (

    <div className='App'>
      <Condicional />
    </div>
  );
}

export default App;
/* Exportando o componente, mandando ele pra frente
Export é o ato de disponibilizar esse arquivo/componente, para que outros possam utilizá-los, EX:
criei um componente que é uma imagem, eu exporto essa imagem, para que possa importar ela em outro arquivo e utilizá-la.*/