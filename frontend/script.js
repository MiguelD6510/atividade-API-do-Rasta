async function CarregarDados() {
     //'https://localhost:3000/'
    const url = 'https://bug-free-goggles-97g9pgjwgr54fwpj-3000.app.github.dev/'

    try {
    // Etapa 2 e 3 — Fazer a requisição e aguardar a respostaabc
    const resposta = await fetch(url);
    
    // Etapa 4 — Converter a resposta em JSON
    const produto = await resposta.json();

    // Etapa 5 — Acessar o elemento HTML
    const conteiner = document.getElementById('lista-produtos');

    // Etapa 6 — Criar o Card e inserir no HTML
    conteiner.innerHTML = `
      <div class="card">
        <h2>${items.nome}</h2>
        <p class="categoria"><strong>Categoria:</strong> ${.categoria}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;

  } catch (erro) {
    console.error('Erro ao buscar dados da API:', erro);
  }
}

// Executar a função
CarregarDados();
