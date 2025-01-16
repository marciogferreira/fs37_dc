import { Sequelize } from "sequelize";
const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 1234,
    database: 'facebook'
})

export async function listarUsuarios() {
    const [resultados, metadata] = await connection.query('SELECT * FROM usuarios');
    return resultados;
}

export async function adicionarUsuario(nome, login, senha) {
    const [resultados, metadata] = await connection.query(
        `INSERT INTO usuarios(nome, login, senha) VALUES('${nome}', '${login}', '${senha}')`
    );
    return resultados;
}

export async function atualizarUsuario(nome, login, senha, id) {
    const [resultados, metadata] = await connection.query(
        `UPDATE usuarios SET nome = '${nome}',login = '${login}', senha = '${senha}' WHERE id = ${id}`
    );
    return resultados;
}

export async function deletarUsuario(id) {
    const [resultados, metadata] = await connection.query(
        `DELETE FROM usuarios WHERE id = ${id}`
    );
    return resultados;
}