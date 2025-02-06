
import express from 'express'
import CategoriasModels from '../models/CategoriasModels.js';
const CategoriasRotas = express.Router();

CategoriasRotas.get('/categorias', async (req, res) => { 
    const lista = await CategoriasModels.findAll({});
    res.json(lista)
})

CategoriasRotas.get('/categorias/:id', async (req, res) => {
    const id = req.params.id
    const dado = await CategoriasModels.findByPk(id);
    res.json(dado)
})

CategoriasRotas.post('/categorias', async (req, res) => { 
    const dados = req.body;
    const retorno = await CategoriasModels.create(dados);
    res.json(retorno)
 })

CategoriasRotas.put('/categorias/:id', async (req, res) => {
    const dados = req.body;
    const id = req.params.id
    const retorno = await CategoriasModels.update(dados, { where: { id: id } });
    res.json(retorno)
})

CategoriasRotas.delete('/categorias/:id', async (req, res) => { 
    const id = req.params.id
    const retorno = await CategoriasModels.destroy({ where: { id: id } });
    res.json(retorno)
 })

export default CategoriasRotas;