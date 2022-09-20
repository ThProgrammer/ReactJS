import styles from "./Frase.module.css"

function Frase () {
    return (
    <>
        <p className={styles.fraseParagrafos}> Este é um componente com uma frase!</p>
    </>
        
    )
}

export default Frase;
// Disponibilizando esse arquivo para ser importado por outros componentes