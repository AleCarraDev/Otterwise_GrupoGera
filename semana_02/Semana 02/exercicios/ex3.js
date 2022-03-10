// 1. Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos
//  sendo cada um deles multiplicado pelo seu índice.
//     Exemplo entrada: [5, 9, 10, 6]
//     Exemplo Saída: 47

const myArray = [5, 9, 10, 6];

function addUp() {
  let result = 0;
  for (let index = 0; index < myArray.length; index++) {
    let element = myArray[index] * index;
    result += element;
  }
  console.log(result);
}
addUp();
