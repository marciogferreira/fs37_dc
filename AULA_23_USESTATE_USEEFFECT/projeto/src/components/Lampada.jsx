import { useState } from 'react'
function Lampada() {
    const[interruptor, setInterruptor] = useState(false)
  
    function power() {
        setInterruptor(!interruptor)
    }

    return (
        <>
            {interruptor}
            <button onClick={power}>Ligar - Desligar</button>
        </>
    )
}
export default Lampada;