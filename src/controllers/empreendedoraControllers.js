const empreendedoras = require("../models/empreendedoras.js");

  class empreendedoraController {
    static GetAllEmpreendedoras = (req, res) => {
        empreendedoras.find((err, empreendedoras) => {
            res.status (200).json(empreendedoras);
        })
    }
 
  static createEmpreendedoras = (req, res) => {
     let empreendedora = new empreendedoras(req.body);

     empreendedora.save((err) => {
         if(err) {
             res.status(500).send({mensage: `${err.message} - falha ao cadastrar empreendedoras`})
         } else {
             res.status(201).send(empreendedora.toJSON())
         }
     })
    }

  static updateEmpreendedoras = (req, res) => {
     const id = req.params.id;

     empreendedoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
     if(!err) {
         res.status(200).send({message: 'Empreendedora atualizada com sucesso'})
     } else {
         res.status(500). send({message: err.message})
     }
   })
 }

   static deleteEmpreendedoras = (req, res) => {
    const id = req.params.id;

    empreendedoras.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Empreendedora removida com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
 }
};

module.exports = empreendedoraController;
