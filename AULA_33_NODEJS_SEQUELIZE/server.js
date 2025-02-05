import express from 'express'
import UsuarioModel from './src/models/UsuarioModel.js'

const app = express()
const port = 3000
// http://localhost:3000/

app.get('/', (req, res) => {
  res.send('Servidor Node + Express!')
})

app.get('/usuarios', async (request, response) => {
    const usuarios = await UsuarioModel.findAll()
    response.json(usuarios)
})

app.listen(port, 'localhost', () => {
  console.log(`Servidor executando na porta ${port}`)
})
      