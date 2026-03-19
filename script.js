// Selecao dos elementos do HTML que o jogo vai usar
const botoes = document.querySelectorAll(".cor");
const btnIniciar = document.getElementById("btnIniciar");
const btnReset = document.getElementById("btnReset");
const statusTexto = document.getElementById("status");
const pontuacaoTexto = document.getElementById("pontuacao");

// Estado do jogo: variaveis que guardam o progresso atual
let sequenciaJogador = [];
let sequenciaJogo = [];
let pontuacao = 0;
let podeClicar = false;

// Lista fixa das cores e tempos do jogo
const cores = ["verde", "vermelho", "amarelo", "azul"];
const TEMPO_PREPARO = 400;
const TEMPO_ENTRE_CORES = 500;
const TEMPO_PISCAR = 250;
const TEMPO_LIBERAR_JOGADOR = 200;
const TEMPO_PROXIMA_RODADA = 700;

// Clique nas cores
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (!podeClicar) {
      return;
    }

    const cor = botao.dataset.cor;

    sequenciaJogador.push(cor);
    piscarBotao(cor);

    console.log("sequencia do jogador:", sequenciaJogador);
    verificarJogada();
  });
});

// Inicio de uma nova partida
function iniciarJogo() {
  sequenciaJogo = [];
  sequenciaJogador = [];
  pontuacao = 0;
  podeClicar = false;

  pontuacaoTexto.textContent = pontuacao;
  statusTexto.textContent = "memorize a sequencia";

  proximaRodada();
}

// Preparacao da proxima rodada
function proximaRodada() {
  sequenciaJogador = [];
  podeClicar = false;

  const indice = Math.floor(Math.random() * cores.length);
  const corSorteada = cores[indice];

  sequenciaJogo.push(corSorteada);

  console.log("sequencia do jogo:", sequenciaJogo);
  statusTexto.textContent = "prepare-se para ver a sequencia";

  setTimeout(() => {
    mostrarSequencia();
  }, TEMPO_PREPARO);
}

// Exibicao da sequencia gerada pelo jogo
function mostrarSequencia() {
  statusTexto.textContent = "memorize a sequencia";

  let i = 0;

  const intervalo = setInterval(() => {
    const corAtual = sequenciaJogo[i];
    piscarBotao(corAtual);

    i++;

    if (i >= sequenciaJogo.length) {
      clearInterval(intervalo);

      setTimeout(() => {
        podeClicar = true;
        statusTexto.textContent = "sua vez";
      }, TEMPO_LIBERAR_JOGADOR);
    }
  }, TEMPO_ENTRE_CORES);
}

// Efeito visual da cor acendendo
function piscarBotao(cor) {
  const botao = document.querySelector(`[data-cor="${cor}"]`);

  botao.classList.add("ativo");

  setTimeout(() => {
    botao.classList.remove("ativo");
  }, TEMPO_PISCAR);
}

// Verificacao da jogada do usuario
function verificarJogada() {
  const indiceAtual = sequenciaJogador.length - 1;

  if (sequenciaJogador[indiceAtual] !== sequenciaJogo[indiceAtual]) {
    gameOver();
    return;
  }

  if (sequenciaJogador.length === sequenciaJogo.length) {
    pontuacao++;
    pontuacaoTexto.textContent = pontuacao;
    statusTexto.textContent = "acertou, proxima rodada";

    setTimeout(() => {
      proximaRodada();
    }, TEMPO_PROXIMA_RODADA);
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

// Eventos dos botoes principais
btnIniciar.addEventListener("click", iniciarJogo);
btnReset.addEventListener("click", resetarJogo);
