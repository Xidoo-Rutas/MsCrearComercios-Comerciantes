const {Router} = require('express');
const insertarComercio = require('../controller/crearCom');
const router = Router();

router.post('/crear', insertarComercio);

module.exports = router;