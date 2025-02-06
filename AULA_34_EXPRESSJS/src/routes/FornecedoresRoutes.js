import express from 'express'

const FornecedoresRoutes = express.Router()

FornecedoresRoutes.get('/fornecedores', (req, res) => { res.json([]) })
FornecedoresRoutes.get('/fornecedores/:id', (req, res) => { res.json([]) })
FornecedoresRoutes.post('/fornecedores', (req, res) => { res.json([]) })
FornecedoresRoutes.put('/fornecedores/:id', (req, res) => { res.json([]) })
FornecedoresRoutes.delete('/fornecedores/:id', (req, res) => { res.json([]) })

export default FornecedoresRoutes;