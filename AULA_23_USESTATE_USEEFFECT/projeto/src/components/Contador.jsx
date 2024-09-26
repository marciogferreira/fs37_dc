import { useState, useEffect } from 'react'
function Contador() {
    const[contador, setContador] = useState(0)
    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }

    // Executa sempre quando o contador altera
    useEffect(() => {
        console.log(contador)
        if(contador > 20) {
            alert("Passando de 20")
        }
    }, [contador]);
    
    // Executa quando o componente cria na tela - APenas 1 vez
    useEffect(() => {
        // alert("Ola")
    }, [])

    return (
        <>
            Contador: {contador}
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )
}
export default Contador;