import Button from "./evento/Button"

function Evento() {
    
    function meuEvento() {
        console.log("Fui ativado!")
    }

    function segundoEvento() {
        console.log("Segundo evento!")
    }
    
    // Não entendendo porque fazer esse código (passar funções pelo props.)
    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </>
    )
}

export default Evento;