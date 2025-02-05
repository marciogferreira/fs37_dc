
import { createServer } from 'node:http'
import { Conexao, connection } from "./src/config/Conexao.js"
import UsuarioModel from './src/models/UsuarioModel.js';

connection();

const server = createServer(async (request, response) => {
    
    const dados = await UsuarioModel.findAll();
    console.log(dados.length)
    dados.map(item => {
        console.log(item.nome)
        console.log(item.login)
    })

    const usuarioDados = {
        nome: 'Sarah',
        login: 'sarah@dc.com.br',
        senha: '123123'
    }
    const umUsuario = await UsuarioModel.findByPk(4);
    const dadosInsert = await UsuarioModel.create(usuarioDados)
    await UsuarioModel.update({ nome: 'Sarah M.' }, { where: { id: 6 } })
    await UsuarioModel.destroy({ where: { id: 7, nome: 'Sarah' } })

    // const dados = await Conexao.query("SELECT * FROM usuarios")
    // const dadosInsert= await Conexao.query("INSERT INTO usuarios(nome, login, senha) VALUES('Max', 'max', '123123')")
    // const dadosUpdate =  await Conexao.query("UPDATE usuarios SET nome = 'Admin' WHERE id = 1")
    // const dadosDelete =  await Conexao.query("DELETE FROM usuarios WHERE id = 1 AND nome = 'Sarah")
    // console.log(dados)

    response.writeHead(200, { 'content-type': 'text/plain' })
    response.end("Servidor NodeJs OK")
})

server.listen(3000, 'localhost' , () => {
    console.log("Servidor executando http://localhost:3000")
})