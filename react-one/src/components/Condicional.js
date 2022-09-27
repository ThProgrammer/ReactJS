import {useState} from "react";

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        setUserEmail(email)
    }

    function limparEmail(e) {
        setUserEmail("");
    }

    return(
        <div>

            <h2>Cadastre seu email: </h2>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Digite seu email:" onChange={(e) => setEmail(e.target.value)}/>

            <button onClick={enviarEmail}> Enviar </button>

            {userEmail && (

                <div>
                    <p>O email cadastro é {userEmail}</p>

                    <button onClick={limparEmail}> Limpar Email</button>
                </div>
                
            )} 

        </div>
    )

}

export default Condicional;