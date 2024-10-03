import { useContext } from "react";
import Produto from "../../components/Produto";
import { AutorizacaoContext, CarrinhoContext } from "../../App";
import { Navigate } from "react-router-dom";
// https://dontpad.com/fs37/homepage
function HomePage() {
    const { setNomeLoja } = useContext(CarrinhoContext)
    const { logado } = useContext(AutorizacaoContext)

    if(logado === false) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <h2>Home Page</h2>
            <button onClick={() => setNomeLoja('DEVStore')}>Botao no Homepage</button>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Produto titulo="Mouse USB Apple" valor={15.99}>
                            Mouse USB - Apple
                        </Produto>
                    </div>
                    <div className="col">
                        <Produto titulo="Teclado USB Apple" valor={95.99}>
                            Teclado USB - Apple
                        </Produto>
                    </div>
                    <div className="col">
                        <Produto titulo="Monitor Apple" valor={5500.00}>
                            Monitor - Apple
                        </Produto>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage;