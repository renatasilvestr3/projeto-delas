const empreendedoras = require("../models/empreendedoras.js");

const getAllEmpreendedoras = (req, res) => {
    empreendedoras.find((err, empreendedoras) => {
        res.satatus(200).json(empreendedoras);

    })
};

const createEmpreendedoras = (req, res) => {
    let empreendedora = new empreendedoras(req.bory);

    empreendedora.save((err) => {
        if(err) {
            res.status(500).send({mensage: `${err.message} - falha ao cadastrar empreendedoras`})
        } else {
            res.status(201).send(empreendedora.toJSON())
        }
    })
};

module.exports = {
    getAllEmpreendedoras,
    createEmpreendedoras
}