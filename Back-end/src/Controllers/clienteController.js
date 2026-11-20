function listarClientes(req, res) {
    res.json([
        {
            nome: "davi",
            agendamento: "24/01/2027"
        },
        {
            nome: "carlos",
            agendamento: "25/01/2027"
        },
        {
            nome: "gabriel",
            agendamento: "26/01/2027"
        },
        {
            nome: "mauro",
            agendamento: "27/01/2027"
        },
        {
            nome: "vinicius",
            agendamento: "10/02/2027"
        }
    ])
}
module.exports ={
    listarClientes
}