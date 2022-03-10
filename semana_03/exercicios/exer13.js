/*13 - Faça um programa que recebe um array e uma função como parâmetro e
percorre todo o array aplicando a função em cada um dos elementos do array.
Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
multiplicaPorDez
Exemplo de Entrada 2:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
dividePorCinco
Exemplo de Saída:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
Exemplo de Saída 2:
[2, 16, 12, 26, 14, 18, 30, 44, 712, 8, 6] */

const array = [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30];

function multiplicaPorDoze(valor) {
  return valor * 12;
}

function dividePorDois(valor) {
  return valor / 2;
}

function alterandoFuncao(array2, funcao) {
  for (let i = 0; i < array2.length; i++) {
    console.log(funcao(array2[i]));
  }
}

alterandoFuncao(array, dividePorDois);
