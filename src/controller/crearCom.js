const modelo = require('../database/modeloComercio');

const insertarComercio = (req, res) => {
    try {
        const comercio = req.body;
        console.log(comercio);
        modelo.create(comercio, (error, docs) => {
            res.json({
                status: "OK",
                status_code: 200,
                msg: "POST OK",
                view: docs
            });
            res.status(200).end();
        });
    } catch (error) {
        console.log(error)
    }

}

module.exports = insertarComercio;
