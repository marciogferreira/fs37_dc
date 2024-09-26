function Produto(props) {
    
    return (
        <>
            <div>
                <img src={props.src} alt="" />
                <p>
                    {props.titulo}
                </p>
                <p>
                    {props.valor}
                </p>
            </div>
        </>
    )
}


export default Produto;