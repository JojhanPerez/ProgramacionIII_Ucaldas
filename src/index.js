//Se instala el framework express para manejar los request HTTP y establecer el puerto a usar
const express = require('express')
//La libreria mongoose nos permite la conexión con la BD MongoDB
const mongoose = require('mongoose')

const clientRoute = require('./routes/client_routes')
const productRoute = require('./routes/product_routes')
//process.env es una variable global para representar el esatdo de las variables de ambiente
const port = process.env.PORT || 3000
const app = express()
require('dotenv').config()

//Conexión al puerto 3000
app.listen(port, () => console.log('Server listening on port', port))

//Primer request para acceder desde el navegador http://localhost:3000
app.get('/', (req,res) => res.send('Programación III'))

//Conexión a la base de datos mongoDB
mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connect with mongoDB'))
        .catch((error) => console.error(error))

/*Middleware*/
app.use(express.json())
app.use('/api', clientRoute)
app.use('/api', productRoute)