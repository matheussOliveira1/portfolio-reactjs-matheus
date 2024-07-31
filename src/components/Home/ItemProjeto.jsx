import styles from "styles/Home/Projetos.module.css";

function ItemProjeto(props){
    return(
        <>
            <div className={styles.containerProjeto}>
                <span className={styles.spnNomeProjeto}>{props.nome}</span>
                <p className={styles.paragrafoDescricaoProjeto}>{props.descricao}</p>
                <a className={styles.aProjeto} href={props.hrfeProjeto}>Visualizar projeto</a>
            </div>
        </>
    )
}

export default ItemProjeto;