import styles from "./Footer.module.css"

function Footer () {
    return(
        <div className={styles.rodape}>
            <p className={styles.escrita}>&copy;ThDev</p>
        </div>
    )
}

export default Footer;