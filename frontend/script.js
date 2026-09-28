async function carregarDados() {
    const url = "https://bug-free-goggles-97g9pgjwgr54fwpj-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produto = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = `
        <div class="card">

            <img 
                src="${produto.imagem}" 
                alt="${produto.nome}"
            >

            <h2>${produto.nome}</h2>

            <p>Categoria: ${produto.categoria}</p>

            <p class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </p>

        </div>
    `;
}

carregarDados();



//async function carregarDados() {
    //const url = "http://localhost:3000/";

    //try {
      //  const resposta = await fetch(url);

        //if (!resposta.ok) {
          //  throw new Error("Erro ao buscar os dados da API.");
        //}

       // const produto = await resposta.json();

       // const listaProdutos = document.getElementById("lista-produtos");

       // listaProdutos.innerHTML = `
         //   <div class="card">
           //     <h2>${produto.nome}</h2>
             //   <p><strong>Categoria:</strong> ${produto.categoria}</p>
               // <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
            //</div>
       // `;
    //} catch (erro) {
      //  console.error(erro);

       // document.getElementById("lista-produtos").innerHTML = `
         //   <p class="erro">Não foi possível carregar o produto.</p>
        //`;
    //}
//}

//carregarDados();



//CSS
//* {
   // margin: 0;
    //padding: 0;
    //box-sizing: border-box;
//}

//body {
  //  font-family: Arial, sans-serif;
    //background-color: #f2f4f7;
   // color: #333;
   // min-height: 100vh;
//}

//main {
  //  width: 90%;
   // max-width: 700px;
    //margin: 50px auto;
    //text-align: center;
//}

//h1 {
  //  color: #222;
   // margin-bottom: 30px;
//}

//#lista-produtos {
  //  display: flex;
    //justify-content: center;
//}

//.card {
  //  background-color: white;
   // width: 100%;
   // max-width: 400px;
    //padding: 25px;
    //border-radius: 12px;
   // border: 1px solid #ddd;
   // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    //text-align: left;
//}

//.card h2 {
  //  color: #2563eb;
   // margin-bottom: 20px;
//}

//.card p {
  //  margin-bottom: 12px;
//}/

//.preco {
  //  color: #16a34a;
   // font-size: 24px;
    //font-weight: bold;
//}

//.erro {
  //  color: #dc2626;
   // font-weight: bold;
//}