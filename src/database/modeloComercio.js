const {Schema, model} = require('mongoose');

const comercios = new Schema({
    nombreNeogcio: {
        type: String,
        required: true
    },
    idUsuario : {
        type: String,
        required: true
    },
    categoriaNegocio: {
        type: String,
        required: true
    },
    direccionNegocio: {
        type: String,
        required: true
    },
    numeroTelefonicoNegocio: {
        type: String,
        required: true
    },
    descripcionNegocio: {
        type: String,
        required: true
    },
    imagenesComercio: {
        type: Array,
        of: String,
        required: true
    },
    diasApertura: {
        type: Array,
        of:String,
        required: true
    },
    horarioApertura: {
        type: Object,
        of: String,
        required:true
    }
});

module.exports = model('comercios', comercios);