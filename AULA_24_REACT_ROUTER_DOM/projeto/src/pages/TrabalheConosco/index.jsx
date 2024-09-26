import { useState } from "react"
function TrabalheConoscoPage() {

    const[cep, setCep] = useState('')
    const[logradouro, setLogradouro] = useState('')
    const[dadosJson, setDadosJson] = useState({})
    
    async function buscarCep() {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json()
        setLogradouro(json.logradouro)
        setDadosJson(json)
    }

    return (
        <>
            <div className="container">
                <h4>Trabalhe Conosco - Preencha seu endereço</h4>
                <form action="">
                    <div className="mb-2">
                        <label htmlFor="">CEP - {cep}</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="CEP"
                            value={cep}
                            onChange={(evento) => {
                                setCep(evento.target.value)
                            }} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Logradouro</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Logradouro"
                            value={logradouro}
                            onChange={(evento) => {
                                setLogradouro(evento.target.value)
                            }} 
                        />
                    </div>
                    {JSON.stringify(dadosJson, null, 2)}
                    <div>
                        <button onClick={buscarCep} type="button" className="btn btn-primary">Buscar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TrabalheConoscoPage