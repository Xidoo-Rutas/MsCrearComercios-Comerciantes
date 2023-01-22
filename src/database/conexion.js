const mongoose = require('mongoose')

const databaseConnect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/xidoo')
        console.log('Se ha enlazado a la base de datos')
    } catch (error) {
        console.log(error)
        console.log('Ocurrio un error al conectarse a la base de datos')
    }
}

module.exports = databaseConnect