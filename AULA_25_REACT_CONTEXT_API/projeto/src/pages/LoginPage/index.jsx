import { useContext } from "react";
import { AutorizacaoContext } from "../../App";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate()
    const { setLogado } = useContext(AutorizacaoContext)

    function login() {
        // Conectar com a API
        // Verifica se o Login e senha estao oK
        setLogado(true)
        navigate('/')
    }

    return (
        <>
            <h2>Login Page</h2>
            <input type="text" />
            <input type="text" name="" id="" />
            <button onClick={login}>Acessar</button>
        </>
    )
}

export default LoginPage;