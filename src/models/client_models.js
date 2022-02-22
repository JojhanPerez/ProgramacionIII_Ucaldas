const mongoose = require('mongoose')
const client_schema = mongoose.Schema({
    dni: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    addres: {
        city: {
            type: String,
            require: true
        },
        cityCode: {
            type: String,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        length: {
            type: Number,
            require: true
        }
    },
    accountBank: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('client_document', client_schema)