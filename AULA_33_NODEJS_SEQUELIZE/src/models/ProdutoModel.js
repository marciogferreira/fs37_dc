import { DataTypes } from 'sequelize'
import { Conexao } from '../config/Conexao.js'

const ProdutoModel = Conexao.define(
    'ProdutoModel', 
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
        descricao: {
            type: DataTypes.STRING(500), // O tamanho da descrição pode ser ajustado conforme necessário
            allowNull: true
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2), // Para valores monetários
            allowNull: false
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'produtos'
    }
)

export default ProdutoModel
