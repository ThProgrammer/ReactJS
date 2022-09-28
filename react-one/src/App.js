import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import Error from "./pages/Error"
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {

  return (
    <Router>

      <NavBar/>

      <Routes>

        <Route exact path="/" element={<Home/>}/>

        <Route path="/empresa" element={<Empresa/>}/>

        <Route path="/contato" element={<Contato/>}/>

        <Route path="*" element={<Error/>}/>

      </Routes>

      <Footer/>

    </Router>
  )
}

export default App;
/* Exportando o componente, mandando ele pra frente
Export é o ato de disponibilizar esse arquivo/componente, para que outros possam utilizá-los, EX:
criei um componente que é uma imagem, eu exporto essa imagem, para que possa importar ela em outro arquivo e utilizá-la.*/