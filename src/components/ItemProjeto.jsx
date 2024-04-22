import '../App.css';

function ItemProjeto(props){
    return(
        <>
            <div id='container-projeto'>
                <span id='spn-nome-projeto'>{props.nome}</span>
                <p id='p-descricao-projeto'>{props.descricao}</p>
                <a id='a-projeto' href={props.hrfeProjeto}>Visualizar projeto</a>
            </div>
        </>
    )
}

export default ItemProjeto;