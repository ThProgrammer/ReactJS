import PropTypes from "prop-types"; // importando a biblioteca PropTypes

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}


// Validação do tipo de dados recebidos:
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}
/* marca deve ser uma string e é uma prop obrigatória
ano_lancamento tem que ser um number e é uma prop obrigatória

-------------------------------------------------------------------

Antes de receber um valor, as propriedades terão o valor default: */
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}
// Quando adicionamos defaultProps, o isRequired não funcionará corretamente, pois a prop sempre terá um valor.

export default Item;