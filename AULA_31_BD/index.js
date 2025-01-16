import { createServer } from 'node:http'
import { listarUsuarios, adicionarUsuario, deletarUsuario, atualizarUsuario } from './CRUD.js'
const server = createServer(async (request, response) => {

    const rota = request.url

    if(rota === '/') {
        response.writeHead(200, {'content-type': 'text/html'})
        return response.end('<h1>Ola Turma FS37</h1>')
    }

    if(rota === '/usuarios') {
        const resultados = await listarUsuarios()
        response.writeHead(200, {'content-type': 'text/json'})
        return response.end(JSON.stringify(resultados))
    }

    if(rota === '/adicionar-usuario') {
        const resultados = await adicionarUsuario('Max', 'max', '123123')
        response.writeHead(200, {'content-type': 'text/json'})
        return response.end(JSON.stringify(resultados))
    }

    if(rota === '/atualizar-usuario') {
        const resultados = await atualizarUsuario('Marcio', 'max', '123123', 4)
        response.writeHead(200, {'content-type': 'text/json'})
        return response.end(JSON.stringify(resultados))
    }

    if(rota === '/deletar-usuario') {
        const resultados = await deletarUsuario(5)
        response.writeHead(200, {'content-type': 'text/json'})
        return response.end(JSON.stringify(resultados))
    }
    
    if(rota === '/contato') {
        response.writeHead(200, {'content-type': 'text/html'})
        return response.end('<h1>Contato</h1>')
    }

    response.writeHead(404, {'content-type': 'text/html'})
    return response.end('<h1>Não encontrado</h1>')

})
// localhost:3000
server.listen(3000, 'localhost', () => {
    console.log("Servidor executando......")
})

// npm init -y
