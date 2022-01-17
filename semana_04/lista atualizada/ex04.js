/*4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

const array = [6, 8, 7];

let array2 = array.reduce(function (primeiro, valoratual) {
  return (primeiro + valoratual) / array.length;
}, 0);

console.log(Math.floor(array2));
