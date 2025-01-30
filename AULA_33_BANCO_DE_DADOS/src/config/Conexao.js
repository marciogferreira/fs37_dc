import { Sequelize } from 'sequelize'
export const Conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 1234,
    database: 'facebook',
    define: {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    }
})

export async function connection() {
    try {
        await Conexao.authenticate();
        console.log("Conexão com Banco Realizada")
    } catch(e) {
        console.log("Erro na conexão com banco. " + e.message)
    }
}

