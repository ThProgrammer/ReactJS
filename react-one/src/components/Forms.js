function Forms() {

    function confirma(e) {
        e.preventDefault() //Usar isso quando utilizar eventos Submit, impede que a página atualize.
        console.log("Dados recebidos!")
    }

    return(
        <>
            <form onSubmit={confirma}>
                <input type="text" placeholder="Digite seu nome"/><br/>

                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default Forms;