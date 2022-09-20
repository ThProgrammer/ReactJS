// Importante criar nomes de componentes com CamelCase.
// Normalmente as funções tem o mesmo nome do arquivo/componente que as guardam.
import Frase from "./Frase"

function HelloWorld() {

// Ao criar funções em JS normalmente colocamos return valor;
// Mas como estamos utilizando JSX, abrimos parênteses e utilizamos HTML:
    return(
        //Criando div porque JSX tem que ter UM container pai de todos
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <Frase/> {/*Reutilização de componente: Um componente deve poder ser reaproveitado e dinâmico!*/}
        </div>
    ) 
}

export default HelloWorld;
// Disponibilizando esse arquivo para ser importado por outros componentes