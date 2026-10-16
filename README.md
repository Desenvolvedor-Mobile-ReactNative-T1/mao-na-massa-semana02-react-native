# Fixação — mão na massa (Módulo 2, Semana 02)

Um projeto Expo. Cada exercício curto é um arquivo em `exercicios/`. Não há navegação no app: para ver outro exercício, troca-se uma linha na mão.

## Rodar

```bash
npm install
npx expo start
```

Abra no Expo Go da Play Store ou da App Store. O projeto usa o SDK 57, que é a versão que essas lojas abrem hoje. O exercício que aparece é o que está ligado em `exercicios/ativo.js`.

## Como passar de um exercício para o outro

O `App.js` só aponta para `exercicios/ativo.js`. Esse arquivo não recebe a solução. Ele só escolhe qual exercício está na tela.

Abra `exercicios/ativo.js` e troque o caminho do `export`:

```js
export { default } from './01-usestate-placar-do-jogo';
```

Salve. O Expo recarrega aquele arquivo. O código que você já escreveu nos outros arquivos continua lá.

Escreva a solução dentro do arquivo do exercício, no lugar dos comentários. Não copie o exercício inteiro para o `App.js`: se fizer isso, o próximo exercício apaga o anterior.

## Exercícios

| Arquivo | Slide | Tema |
| --- | --- | --- |
| `01-usestate-placar-do-jogo.js` | Exercício 1 | Dois estados, placar |
| `02-usestate-volume.js` | Exercício 2 | Limite de 0 a 10 |
| `03-usestate-charada-escondida.js` | Exercício 3 | Booleano e `&&` |
| `04-usestate-lista-de-compras.js` | Exercício 4 | Texto, array, `.map()` |
| `05-usestate-caca-ao-bug.js` | Caça ao bug | Quatro erros para corrigir |
| `06-useeffect-boas-vindas.js` | useEffect, exercício 1 | Efeito com `[]` |
| `07-useeffect-meta-de-passos.js` | useEffect, exercício 2 | Efeito com `[estado]` |

O caça ao bug já vem com o código quebrado. A correção é feita nesse arquivo.

Digite o código. O enunciado está no comentário no topo de cada arquivo.
