const express = require("express");
const api = express();

const cors = require("cors")

const mysql = require("mysql")

api.use(cors())
api.use(express.json())

const bancodados = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "DNOQREM2021",
    database: "motoristas"
})


api.get("/", (req, res) => {
    const sql = "SELECT * FROM motorista"
    bancodados.query(sql, (err, dados) => { 
        if (err) return res.json("Error")
        return res.json(dados)
    })

})

api.post('/cadastrar', (req, res) => {
    const sql = "INSERT INTO motorista (`Nome`, `Modelo`, `Placa`, `RG`) VALUES (?)"
    const dadosPOST = [req.body.nome, req.body.modelo, req.body.placa, req.body.rg]
    bancodados.query(sql, [dadosPOST], (erro, enviou) => {
        if (erro) return res.json("Houve algum problema com o MySQL");
        return res.json(enviou)
    })
})

api.put('/editar/:id', (req, res) => {
    const sql = "UPDATE motorista SET `nome` = ?, `modelo` = ?, `placa` = ?, `RG` = ? WHERE id = ?"
    const dadosPUT = [req.body.nome, req.body.modelo, req.body.placa, req.body.rg]
    const id = req.params.id;
    bancodados.query(sql, [...dadosPUT, id], (erro, enviou) => {
        if (erro) return res.json("Houve algum problema com o MySQL");
        return res.json(enviou)
    })
})

api.delete('/motorista/:id', (req, res) => {
    const sql = "DELETE FROM motorista WHERE id = ?"
    // const dadosDELETE = [req.body.nome, req.body.modelo, req.body.placa, req.body.rg]
    const id = req.params.id;

    bancodados.query(sql, [id], (erro, enviou) => {
        if (erro) return res.json("Houve algum problema com o MySQL");
        return res.json(enviou)
    })
})


.listen(8080, () => {
    console.log("Conectado!")
})