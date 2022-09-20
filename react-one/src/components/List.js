/* Componente utilizado para testar a prática de fragmentos
E não precisar mais criar divs desnecessárias só para ter container pai.*/
import Item from './Item';


function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            
            <ul>
                <Item marca="Xiaomi" ano_lancamento={1985}/>
                <Item marca="Samsung" ano_lancamento={1964}/>
                <Item marca="Apple" ano_lancamento={2002}/>
            </ul>
        </>
    )
}

export default List;