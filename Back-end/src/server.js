
const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()


//middlewares
app.use(cors())
app.use(express.json())

const clienteRoutes = require("./Routes/clienteRoutes");
app.use("/clientes", clienteRoutes);

//rota inicial
app.get("/",(req,res)=>{
    res.send("API funcionando")
})
app.get("/test",(req,res)=>{
    res.json({
        mensagem:"test funcionando"
    })
})

//inicializando servidor
 
const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na http://localhost:${PORT}`)
})