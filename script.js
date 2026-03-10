const botoes = document.querySelectorAll(".cor");
let sequenciaJogador = [];

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const cor  = botao.dataset.cor;
    sequenciaJogador.push(cor); //adcionando as cores a lista
    console.log("Sequencia do jogador: " + sequenciaJogador);

  });
});

