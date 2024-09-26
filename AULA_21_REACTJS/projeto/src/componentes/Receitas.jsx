function Receitas(props) {
    return(
        <>
            <h1>{props.nome}</h1>
            {props.children}
        </>
    )
}

export default Receitas