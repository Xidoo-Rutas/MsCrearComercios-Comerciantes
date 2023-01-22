const {check, validationResult} = require('express-validator');

const validacionDeDatos = [
    check('nombreNeogcio').exists().not().isEmpty().trim(),
    check('idUsuario').exists().not().isEmpty().trim(),
    check('categoriaNegocio').exists().not().isEmpty().trim(),
    check('direccionNegocio').exists().not().isEmpty().trim(),
    check('numeroTelefonicoNegocio').exists().not().isEmpty().trim().isLength({min:10, max:10}).withMessage('el telefono debe contener 10 digitos'),
    check('descripcionNegocio').exists().not().isEmpty().trim(),
    // check('imagenesComercio').exists().not().isEmpty().trim(), PROXIMO
    // check('diasApertura').exists().not().isEmpty().trim(), PROXIMO
    check('horarioApertura.apertura').exists().not().isEmpty().trim(),
    check('horarioApertura.cierre').exists().not().isEmpty().trim(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});
        }
    }
];

module.exports = validacionDeDatos;