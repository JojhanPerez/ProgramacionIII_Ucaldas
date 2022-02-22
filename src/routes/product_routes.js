const express = require('express')
const productSchema = require('../models/product_models')
const route = express.Router()

/**Crear la ruta para creación de usuarios*/
route.post('/product', (req,res) => {
    const user = productSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

/**Listar los usuarios existentes*/
route.get('/product', (req, res) => {
    productSchema
                .find()
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Mostrar información de usuario especifico*/
route.get('/product/:id', (req,res) => {
    const {id} = req.params
    productSchema
                .findById(id)
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Eliminar un usuario especifico*/
route.delete('/product/:id', (req,res) => {
    const {id} = req.params
    productSchema
                .remove({_id: id})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Editar un recurso especifico*/
route.put('/product/:id', (req,res) => {
    const {id} = req.params
    const {product, img, price, quantity, state} = req.body
    productSchema
                .updateOne({_id: id}, {$set:{product, img, price, quantity, state}})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

module.exports = route