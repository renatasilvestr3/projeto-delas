const empreendedoras = require('../models/emprendedoras');


class EmpreendedoraController {

  static getAllEmpreendedoras = (req, res) => {
    empreendedoras.find((err, empreendedoras) => {
      res.status(200).json(empreendedoras);
    })
  }
  static createEmpreendedoras = (req, res) => {
    let empreendedora = new empreendedora(req.body);

    empreendedora.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar empreendedora` })
      } else {
        res.status(201).send(empreendedora.toJSON())
      }
    })
  };
};


module.exports = EmpreendedoraController;