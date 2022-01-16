/*10 - Escreva um programa para encontrar os elementos comuns entre dois
arrays
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
[-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]
Exemplo de Saída:
[22, -19, 13] */

const array = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];

const array2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

const newArray3 = array.map((value1) => {
  return array2.filter((value2) => {
    return value2 === value1;
  });
});

let finalArray = newArray3.filter((value) => {
  return value != 0;
});

console.log(finalArray);
