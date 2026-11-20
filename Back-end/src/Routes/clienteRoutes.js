const express = require("express")
const router = express.Router()
const clienteController = require("../Controllers/clienteController")

router.get("/",clienteController.listarClientes)
router.post("/",(req,res)=>{
    res.json({
        mensagem: "cadastrando cliente"
    })
})
module.exports = router