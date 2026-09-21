const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res) => {

    res.status(200).json({
        mensagem: "API funcionando com sucesso"
    });
});
app.listen(3000,()=>{
    console.log("servidor rodando na porta 3000");

    app.get("/items",(req,res)=>{
        const items = [
            {
                id: 1,
                nome: "tesoura",
                preco: 5.5,
                categoria: "material escolar"
            },
            {
                id: 2,
                nome: "vassoura",
                preco: 20,
                categoria: "objetos para casa"
            }
        ]
    })
})                       
