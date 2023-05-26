const express = require ("express");
const controller = require ("../controllers/empreendedoraControllers");

const router = express.Router();

router.get("/", controller.getAllEmpreendedoras);
router.post("/", controller.createEmpreendedoras);
