const express = require ("express");
const EmpreendedoraController = require ("../controllers/empreendedoraControllers");
const empreendedoraController = require("../controllers/empreendedoraControllers");

const router = express.Router();

router
.get("/", EmpreendedoraController.getAllEmpreendedoras)
.post("/", EmpreendedoraController.createEmpreendedoras)
.put("/:id", EmpreendedoraController.updateEmpreendedoras)
.delete("/:id", EmpreendedoraController.deleteEmpreendedoras)

module.exports = router;
