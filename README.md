# Projeto Genius Facil

Jogo da memoria inspirado no classico Genius, desenvolvido com `HTML`, `CSS` e `JavaScript`.

## Acesse online

Projeto publicado no Render:

`https://projetogenius.onrender.com`

## Preview

![Preview do projeto](./assets/preview.png)

## Sobre o projeto

O objetivo do jogo e observar a sequencia de cores exibida e repeti-la corretamente a cada rodada. A cada acerto, uma nova cor e adicionada, deixando o desafio mais dificil.

## Funcionalidades

- Iniciar uma nova partida
- Gerar sequencias aleatorias de cores
- Validar os cliques do jogador
- Exibir pontuacao em tempo real
- Resetar o jogo com um botao dedicado
- Funcionar bem em telas menores

## Tecnologias utilizadas

- `HTML5`
- `CSS3`
- `JavaScript`

## Estrutura do projeto

```text
Projeto-Genius-Facil/
|-- assets/
|-- index.html
|-- style.css
|-- script.js
|-- render.yaml
`-- README.md
```

## Como executar localmente

1. Clone ou baixe este repositorio.
2. Abra a pasta do projeto.
3. Execute o arquivo `index.html` no navegador.

## Como jogar

1. Clique em `Iniciar Jogo`.
2. Observe a sequencia mostrada pelo jogo.
3. Repita a mesma ordem clicando nas cores.
4. A cada rodada correta, uma nova cor sera adicionada.
5. Se errar a sequencia, a partida termina.

## Logica do jogo

- O sistema sorteia uma nova cor aleatoria
- A cor e adicionada a sequencia atual
- O jogo exibe a sequencia visualmente
- O jogador tenta reproduzir a ordem correta
- Cada clique e comparado com a sequencia esperada
- Ao acertar toda a rodada, a pontuacao aumenta e uma nova rodada comeca

## Deploy

O projeto esta configurado para deploy no Render com o arquivo `render.yaml`, usando o modo de site estatico.

## Melhorias futuras

- Adicionar sons para cada cor
- Criar niveis de dificuldade
- Exibir recorde de pontuacao
- Melhorar as animacoes visuais
- Adicionar uma tela final de jogo
- Salvar a melhor pontuacao localmente
