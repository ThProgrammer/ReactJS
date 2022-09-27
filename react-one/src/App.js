import './App.css'; //Import src/App.css; "." quer dizer "pasta atual"
import OutraLista from './components/OutraLista';


function App() {

  const meusItens = ["React", "JavaScript", "Banco de dados"]

  return (

    <div className='App'>
      
    <OutraLista itens={meusItens}/>

    <OutraLista itens={[]}/>

    </div>
  );
}

export default App;
/* Exportando o componente, mandando ele pra frente
Export é o ato de disponibilizar esse arquivo/componente, para que outros possam utilizá-los, EX:
criei um componente que é uma imagem, eu exporto essa imagem, para que possa importar ela em outro arquivo e utilizá-la.*/