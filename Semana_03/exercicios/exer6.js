/*6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprimem os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:
[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
-----------------
[-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ] */

let array = [-78, -17, 3232, 328, 4565, -266, -4, -643, 22, -123, 5];

function positiveNumber(array1) {
  let array2 = [];
  let number = 0;

  for (i = 0; i < array1.length; i++) {
    if (array1[i] > 0) {
      array2 += " " + array1[i];
    }
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0) {
      number++;
    }
  }

  return array2 + " temos: " + number + " positivos";
}

function negativeNumber(array1) {
  let array2 = [];

  for (i = 0; i < array1.length; i++) {
    if (array1[i] < 0) {
      array2 += " " + array1[i];
    }
  }

  let number = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 0) {
      number++;
    }
  }
  return array2 + " temos: " + number + " negativos";
}

function numberPar(array1) {
  let array2 = [];

  for (i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
      array2 += " " + array1[i];
    }
  }
  let number = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
      number++;
    }
  }
  return array2 + " temos: " + number + " pares";
}

function numberInpar(array1) {
  let array2 = [];

  for (i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
      array2 += " " + array1[i];
    }
  }
  let number = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
      number++;
    }
  }
  return array2 + " temos: " + number + " Impares";
}

console.log(`
Positivos: ${positiveNumber(array)} 
Negativos:${negativeNumber(array)} 
Pares:${numberPar(array)}
impares:${numberInpar(array)}
`);
