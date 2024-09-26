import { useState } from "react";
function Estados() {
    const[nome, setNome] = useState("Nicolas");
    const[idade, setIdade] = useState(21);
    function mudarNome() {
        if(nome === 'Nicolas') {
            setNome("Alice")
            setIdade(31)
        } else {
            setNome("Nicolas")
            setIdade(21)
        }
    }
    return (
        <>
            {nome} - {idade} <br />
            <button className="bg-blue-400 rounded p-1 text-white" onClick={mudarNome}>
                Clique Aqui
            </button>
        </>
    ) 
}
export default Estados;