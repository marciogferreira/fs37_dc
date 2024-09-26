import { useState } from "react"
function ContatoPage() {

    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[mensagem, setMensagem] = useState('')
    
    return (
        <>
            <div className="container">
                <h4>Pagina Contato</h4>
                <form action="">
                    <div className="mb-2">
                        <label htmlFor="">Nome - {nome}</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(evento) => {
                                setNome(evento.target.value)
                            }} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">E-mail - {email}</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(evento) => {
                                setEmail(evento.target.value)
                            }} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Mensagem - {mensagem}</label>
                        <textarea 
                            className="form-control" 
                            placeholder="Digite sua Mensagem"
                            onChange={(evento) => {
                                setMensagem(evento.target.value)
                            }} 
                       ></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContatoPage