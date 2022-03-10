/*8 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

let mediaFinal = [6, 8, 7];

function media(array) {
  let arrayMedia = 0;

  for (let i = 0; i < array.length; i++) {
    arrayMedia += mediaFinal[i];
  }

  return arrayMedia / array.length;
}

console.log(media(mediaFinal));
