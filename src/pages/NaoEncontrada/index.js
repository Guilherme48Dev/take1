import styles from "./NaoEncontrada.module.css"

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>OPS!!!</h2>
            <p>Não encontramos nenhum dado aqui volte para página inicial!</p>
        </section>

    )
}

export default NaoEncontrada;