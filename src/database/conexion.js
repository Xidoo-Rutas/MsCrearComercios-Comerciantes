const mongoose = require('mongoose');
require('dotenv').config()

const databaseConnect = () => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect('mongodb://localhost:27017/xidoo');
        console.log('Se ha enlazado a la base de datos');
     } catch (error) {
        console.log(error);
        console.log('Ocurrio un error al conectarse a la base de datos');
    }
}

module.exports = databaseConnect;