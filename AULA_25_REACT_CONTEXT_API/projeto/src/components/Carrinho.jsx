import { useContext } from "react";
import { CarrinhoContext } from "../App";

const Carrinho = () => {
    const { lista } = useContext(CarrinhoContext)

    return (
        <div id="carrinho">
            <p>{lista.reduce((quantidade, item) => {return item.quantidade + quantidade},0)}</p>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
        </div>
    )
}

export default Carrinho;

