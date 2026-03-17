//Seleção dos elementos do HTML que o jogo vai usar
const botoes = document.querySelectorAll(".cor");
const btnIniciar = document.getElementById("btnIniciar");
const btnReset = document.getElementById("btnReset");
const statusTexto = document.getElementById("status");
const pontuacaoTexto = document.getElementById("pontuacao");

//Estado do jogo: variáveis que guardam o progresso atual
let sequenciaJogador = [];
let sequenciaJogo = [];
let pontuacao = 0;
let podeClicar = false;

//Lista fixa das cores possíveis no jogo
const cores = ["verde", "vermelho", "amarelo", "azul"];

// Clique nas cores
// Cada quadrado recebe um evento de clique.
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Se a sequência do jogo ainda estiver sendo mostrada,
    // o clique do jogador é ignorado
    if (!podeClicar) {
      return;
    }

    // dataset.cor lê o valor do atributo data-cor do HTML
    // Ex: <div data-cor="verde"> retorna "erde
    const cor = botao.dataset.cor;

    sequenciaJogador.push(cor);
    piscarBotao(cor);

    console.log("sequencia do jogador:", sequenciaJogador);
    verificarJogada();
  });
});

// Início de uma nova partida
function iniciarJogo() {
  sequenciaJogo = [];
  sequenciaJogador = [];
  pontuacao = 0;
  podeClicar = false;

  pontuacaoTexto.textContent = pontuacao;
  statusTexto.textContent = "memorize a sequencia";

  proximaRodada();
}

// Preparação da próxima rodada
function proximaRodada() {
  sequenciaJogador = [];
  podeClicar = false;

  // Math.random gera um número entre 0 e 1.
  // Multiplicando por `cores.length`, temos um valor dentro do tamanho do array.
  // Math.floor remove a parte decimal e transforma isso em um índice válido.
  const indice = Math.floor(Math.random() * cores.length);
  const corSorteada = cores[indice];

  sequenciaJogo.push(corSorteada);

  console.log("sequencia do jogo:", sequenciaJogo);
  mostrarSequencia();
}

// Exibição da sequência gerada pelo jogo
function mostrarSequencia() {
  statusTexto.textContent = "memorize a sequencia";

  let i = 0;

  // setInterval repete a função automaticamente a cada 800ms.
  // Isso é o que permite mostrar uma cor por vez.
  const intervalo = setInterval(() => {
    const corAtual = sequenciaJogo[i];
    piscarBotao(corAtual);

    i++;

    if (i >= sequenciaJogo.length) {
      clearInterval(intervalo);

      // setTimeout espera um pouco antes de liberar o jogador,
      // para a última animação terminar.
      setTimeout(() => {
        podeClicar = true;
        statusTexto.textContent = "sua vez";
      }, 500);
    }
  }, 800);
}

// Efeito visual da cor acendendo
function piscarBotao(cor) {
  // Usa seletor com atributo para encontrar exatamente o quadrado da cor recebida.
  const botao = document.querySelector(`[data-cor="${cor}"]`);

  botao.classList.add("ativo");

  setTimeout(() => {
    botao.classList.remove("ativo");
  }, 400);
}

// Verificação da jogada do usuário
function verificarJogada() {
  // Pega a posição do último item clicado.
  // Ex: se o jogador clicou 3 cores, o último índice é 2.
  const indiceAtual = sequenciaJogador.length - 1;

  if (sequenciaJogador[indiceAtual] !== sequenciaJogo[indiceAtual]) {
    gameOver();
    return;
  }

  // Se o tamanho das duas sequências for igual,
  // significa que o jogador completou toda a rodada corretamente.
  if (sequenciaJogador.length === sequenciaJogo.length) {
    pontuacao++;
    pontuacaoTexto.textContent = pontuacao;
    statusTexto.textContent = "acertou, proxima rodada";

    setTimeout(() => {
      proximaRodada();
    }, 1000);
  }
}

// Fim de jogo
function gameOver() {
  podeClicar = false;
  statusTexto.textContent = "game over";
}

// Reset do jogo
function resetarJogo() {
  sequenciaJogador = [];
  sequenciaJogo = [];
  pontuacao = 0;
  podeClicar = false;

  pontuacaoTexto.textContent = pontuacao;
  statusTexto.textContent = "clique em iniciar para jogar";
}

// Eventos dos botões principais
btnIniciar.addEventListener("click", iniciarJogo);
btnReset.addEventListener("click", resetarJogo);
