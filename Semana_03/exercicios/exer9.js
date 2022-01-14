/*9 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
o menor elemento deste array e sua posição. Mostre as informações
encontradas no console.
OBS: Para melhorar a resolução desse problema, monte um programa que
também consegue retornar qual o maior valor e qual a sua posição.
Exemplo de Entrada:
[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4 */

const array = [1, 2, 3, 4, 5, 6, 7, -22];

function encontreValor(valor) {
  let menorValor1 = 0;

  let index1;

  for (let i = 0; i < valor.length; i++) {
    if (array[i] < menorValor1) {
      menorValor1 = array[i];
      index1 = i;
    }

    array[i + 1];
  }
  console.log("Menor Valor: " + menorValor1);
  console.log("Posição: " + index1);

  let menorValor2 = 0;

  let index2;

  for (let i = 0; i < valor.length; i++) {
    if (array[i] > menorValor2) {
      menorValor2 = array[i];
      index2 = i;
    }

    array[i + 1];
  }
  console.log("Maior Valor: " + menorValor2);
  console.log("Posição: " + index2);
}

encontreValor(array);
