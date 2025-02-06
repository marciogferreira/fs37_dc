import Conexao from '../models/Conexao.js'

const CategoriasModels = Conexao.define(
    'CategoriasModels',
    {
        // Campos Aqui
    },
    {
        tableName: 'categorias'
    }
)

export default CategoriasModels