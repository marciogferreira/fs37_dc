
import { Sequelize } from "sequelize";

const Conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 1234,
    database: 'facebook'
})

export default Conexao