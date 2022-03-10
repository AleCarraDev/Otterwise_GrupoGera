// 11 - Crie um algoritmo que tem como entrada um array de notas, e imprime no
// console a média aritmética dessas notas.
// Exemplo Entrada:
// [6, 8, 7]
// Exemplo Saída:
// 7
let mediumArray = [6, 8, 7];
function showMedium(array) {
  let soma = 0;
  let medium = 0;
  for (let index = 0; index < array.length; index++) {
    soma += array[index];
    medium = soma / array.length;
  }
  console.log(medium);
}
showMedium(mediumArray);
