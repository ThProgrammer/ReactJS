/* Componente utilizado para testar a prática de fragmentos
E não precisar mais criar divs desnecessárias só para ter container pai.*/
import Item from './Item';


function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            
            <ul>
                <Item marca="Xiaomi"/>
                <Item marca="Samsung"/>
                <Item marca="Apple"/>
            </ul>
        </>
    )
}

export default List;