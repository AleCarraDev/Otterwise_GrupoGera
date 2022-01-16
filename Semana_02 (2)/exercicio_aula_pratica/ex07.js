// 7 - Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada:
// [-5,0,-3,-4,12]
// Exemplo de Saída:
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

let numArray = [-5, 0, -3, -4, 12];

let result3 = 0;
let countPar = 0;
function parNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === result3) {
      countPar += 1;
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countPar + " valor(es) par(es)");
}

parNumbers(numArray);

let countImpar = 0;
function imparNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2) {
      countImpar += 1;
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countImpar + " valor(es) ímpar(es)");
}

imparNumbers(numArray);

let result = 0;
let countPositive = 0;
function positiveNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > result) {
      countPositive += 1;
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countPositive + " valor(es) positivo(s)");
}

positiveNumbers(numArray);

let result2 = 0;
let countNegative = 0;
function negativeNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] < result) {
      countNegative += 1;
      // countPositive++
      // countPositive = countPositive + 1
    }
  }
  console.log(countNegative + " valor(es) negativos(s)");
}

negativeNumbers(numArray);
