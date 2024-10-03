import { useContext, useState } from "react";
import { CarrinhoContext } from "../App";
// dontpad.com/fs37/produto
function Produto({ titulo, children, valor }) {

    const { lista, setLista } = useContext(CarrinhoContext)
    const[quantidade, setQuantidade] = useState(0)

    function aumentarQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuirQuantidade() {
        if(quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    }

    function adicionarNoCarrinho(nome) {
        let listaAux = lista;
        listaAux.push({
            nome: nome,
            quantidade: quantidade
        })
        setLista([...listaAux])
        setQuantidade(0)
    }

    return (
        <>
        <div className="card">
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {titulo}
                </h5>
                <p className="card-text">
                    {children}
                </p>
                <strong>
                    R$ {valor}
                </strong> <br />
                <button onClick={diminuirQuantidade} className="btn btn-primary btn-sm">-</button>
                {quantidade}
                <button onClick={aumentarQuantidade} className="btn btn-primary btn-sm">+</button>
                <br />
                <button onClick={() => adicionarNoCarrinho(titulo)} className="btn btn-primary">
                    Adicionar no Carrinho
                </button>
            </div>
        </div>
        </>
    )
}

export default Produto;