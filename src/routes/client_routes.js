const express = require('express')
const userSchema = require('../models/client_models')
const route = express.Router()

/**Crear la ruta para creación de usuarios*/
route.post('/client', (req,res) => {
    const user = userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

/**Listar los usuarios existentes*/
route.get('/client', (req, res) => {
    userSchema
                .find()
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Mostrar información de usuario especifico*/
route.get('/client/:id', (req,res) => {
    const {id} = req.params
    userSchema
                .findById(id)
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Eliminar un usuario especifico*/
route.delete('/client/:id', (req,res) => {
    const {id} = req.params
    userSchema
                .remove({_id: id})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

/**Editar un recurso especifico*/
route.put('/client/:id', (req,res) => {
    const {id} = req.params
    const {dni, name, lastname, addres, accountBank} = req.body
    userSchema
                .updateOne({_id: id}, {$set:{dni, name, lastname, addres, accountBank}})
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}))
})

module.exports = route