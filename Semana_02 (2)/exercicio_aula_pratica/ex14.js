// 14 - Dado um array de números, faça um programa que encontre o menor
// elemento deste array e sua posição. Mostre as informações encontradas no
// console.
// Exemplo de Entrada:
// [1,2,3,4,-5,6,7,8,9,10]
// Exemplo de Saída:
// Menor valor: -5
// Posição: 4

const numArray = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
let counter = 0;

function findSmaller() {
  for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    if (element < numArray.length) {
      counter++;
    }
  }
  console.log(counter);
}
findSmaller();
