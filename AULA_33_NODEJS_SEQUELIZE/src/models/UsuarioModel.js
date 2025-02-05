import { DataTypes } from 'sequelize'
import { Conexao } from '../config/Conexao.js'
const UsuarioModel = Conexao.define(
    'UsuarioModel', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        criado_em: {
            type: DataTypes.DATE,
            allowNull: true
        },
        alterado_em: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: 'usuarios'
    }
)

export default UsuarioModel