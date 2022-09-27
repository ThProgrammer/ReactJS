import styles from "./Forms.module.css"
import {useState} from "react"

function Forms() {

    function cadastrarUsuario(e) {
    e.preventDefault() //Usar isso quando utilizar eventos Submit, impede que a página atualize.
    console.log(`${name}`)
    console.log(`${password}`)
    console.log("Cadastrou o usuário!")
    }

    const [name, setName] = useState('-------')
    const [password, setPassword] = useState('-------')

    return(
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>

                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)} /><br/> {/*Ao mudar o name, setName captura o valor alterado  */}

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} /><br/>

                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default Forms;