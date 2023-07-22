<script>
  // Obtém todos os botões do menu
  const menuItems = document.querySelectorAll(".cabecalho-menu-item");

  // Função para adicionar a classe 'botao-clicado' ao botão clicado
  function marcarBotaoClicado(event) {
    // Remove a classe 'botao-clicado' de todos os botões
    menuItems.forEach((item) => item.classList.remove("botao-clicado"));
    // Adiciona a classe 'botao-clicado' ao botão clicado
    event.target.classList.add("botao-clicado");
  }

  // Adiciona o evento de clique a cada botão do menu
  menuItems.forEach((item) => item.addEventListener("click", marcarBotaoClicado));
</script>
