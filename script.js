const botoes = document.querySelectorAll(".cor");
const btnIniciar = document.getElementById("btnIniciar");
const btnReset = document.getElementById("btnReset");
const statusTexto = document.getElementById("status");
const pontuacaoTexto = document.getElementById("pontuacao");

let sequenciaJogador = [];
let sequenciaJogo = [];
let pontuacao = 0;
let podeClicar = false;

const cores = ["verde", "vermelho", "amarelo", "azul"];

// evento de clique dos botoes
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

// inicia o jogo do zero
function iniciarJogo() {
  sequenciaJogo = [];
  sequenciaJogador = [];
  pontuacao = 0;
  podeClicar = false;

  pontuacaoTexto.textContent = pontuacao;
  statusTexto.textContent = "memorize a sequencia";

  proximaRodada();
}

// adiciona mais uma cor na sequencia
function proximaRodada() {
  sequenciaJogador = [];
  podeClicar = false;

  const indice = Math.floor(Math.random() * cores.length);
  const corSorteada = cores[indice];

  sequenciaJogo.push(corSorteada);

  console.log("sequencia do jogo:", sequenciaJogo);

  mostrarSequencia();
}

// mostra a sequencia piscando
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
      }, 500);
    }
  }, 800);
}

// faz o botao piscar'
function piscarBotao(cor) {
  const botao = document.querySelector(`[data-cor="${cor}"]`);

  botao.classList.add("ativo");

  setTimeout(() => {
    botao.classList.remove("ativo");
  }, 400);
}

// verifica se o jogador clicou certo
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
    }, 1000);
  }
}

// fim de jogo
function gameOver() {
  podeClicar = false;
  statusTexto.textContent = "game over";
}

// reseta tudo
function resetarJogo() {
  sequenciaJogador = [];
  sequenciaJogo = [];
  pontuacao = 0;
  podeClicar = false;

  pontuacaoTexto.textContent = pontuacao;
  statusTexto.textContent = "clique em iniciar para jogar";
}

// eventos dos botoes principais
btnIniciar.addEventListener("click", iniciarJogo);
btnReset.addEventListener("click", resetarJogo);
