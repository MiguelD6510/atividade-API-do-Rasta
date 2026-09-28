const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const produto = {
        nome: "Fone Bluetooth",
        preco: 129.90,
        categoria: "Áudio",
        imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5DOuLm9OZ6n_D2NzM562hC4t6cdTTpWiYQDoU8aQzPAkPwxtxqdTzdsxCXalF4z4ZiUaDzXrzMP4OlmN1_oZWVRelU83_L0uOKdxMxkuhX0ntTBAaGKunDuxx3SQU_OO6Ha1ylA&usqp=CAc"
    };

    res.json(produto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


// const express = require("express");
//const cors = require("cors");

//const app = express();
//const PORT = 3000;

//app.use(cors());
//app.use(express.json());

//app.get("/", (req, res) => {
    //const produto = {
      //  nome: "Teclado Mecânico",
        //preco: 299.90,
       // categoria: "Periféricos"
    //};

    //res.json(produto);
//});

//app.listen(PORT, () => {
  //  console.log(`Servidor funcionando em http://localhost:${PORT}`);
//});




//HTML
//<!DOCTYPE html>
//<html lang="pt-BR">
//<head>
  //  <meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<title>API de Produtos</title>
    //<link rel="stylesheet" href="style.css">
//</head>
//<body>

  //  <main>
    //    <h1>Produto da API</h1>

      //  <section id="lista-produtos"></section>
    //</main>

    //<script src="script.js"></script>
//</body>
//</html>