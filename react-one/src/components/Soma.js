import PropTypes from "prop-types";

function Soma({n1, n2}) {
    return (
    <>
        {n1 + n2}
    </>
    )
}

Soma.propTypes = {
    n1: PropTypes.number.isRequired,
    n2: PropTypes.number.isRequired
}

Soma.defaultProps = {
    n1: 0, 
    n2: 0
}


export default Soma;