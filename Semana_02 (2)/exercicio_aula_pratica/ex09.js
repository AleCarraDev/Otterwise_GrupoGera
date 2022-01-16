// 9 - Dado um array de números como entrada, faça um programa que
// multiplique todos os valores por 10.
// Exemplo de Entrada:
//
// Exemplo de Saída:
// [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]

let numArray = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplier = (array) => {
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] * 10;
  }
  console.log(array);
};
multiplier(numArray);
