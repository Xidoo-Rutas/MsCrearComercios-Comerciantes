const {Router} = require('express');
const insertarComercio = require('../controller/crearCom');
const validacionDeDatos = require('../database/validator/comercioValidator');
const router = Router();

router.post('/crear', validacionDeDatos ,insertarComercio);

module.exports = router;