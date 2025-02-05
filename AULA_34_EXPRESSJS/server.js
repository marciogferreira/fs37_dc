import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    // origin: '*'
}))

app.get('/', (request, response) => {
    response.send('Hello Express')
})

const usuarios = [
    { id: 1, nome: 'Jose' }, // 0
    { id: 2, nome: 'Joao' }, // 1
    { id: 3, nome: 'Maria' }, // 2
]

app.get('/usuarios', (request, response) => {
    response.json(usuarios)
})

// Passagem de Parametros com Express
app.get('/usuarios/:id', (request, response) => {
    const id = request.params.id;
    const indice = usuarios.findIndex((item) => item.id == id )
    if(usuarios[indice] != undefined) {
        response.json(usuarios[indice])
    } else {
        response.send("Usuário inexistente!")
    }
})


app.get('/contato', (request, response) => {
    response.send('Contato')
})

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando em http://localhost:3000")
})