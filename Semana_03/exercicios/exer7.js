/*7 - [REFATORAÇÃO] Dado um array de números como entrada, faça um
programa que multiplique todos os valores por 10.
OBS: Para melhorar a resolução desse problema, monte um programa que
recebe como parâmetro o valor pelo qual os valores do array devem ser
multiplicados.
Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3] */

let array = [1, 2, 63, 3, 72, 94, 153, 221, 3563, 42, 343];

function multiplicacao(array, multiplication) {
  let array1 = [];

  for (i = 0; i < array.length; i++) {
    array1[i] = array[i] * multiplication;
  }
  console.log(array1);
}

multiplicacao(array, 7);
