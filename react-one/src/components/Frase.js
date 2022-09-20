import styles from "./Frase.module.css"

function Frase () {
    return (
    <div>
        <p className={styles.fraseParagrafos}> Este é um componente com uma frase!</p>
    </div>
        
    )
}

export default Frase;
// Disponibilizando esse arquivo para ser importado por outros componentes