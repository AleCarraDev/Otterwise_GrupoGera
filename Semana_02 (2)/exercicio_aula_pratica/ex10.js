// 10 - Dado um número, faça um algoritmo que imprime no console a soma de
// todos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor
// 5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).
// Os valores de entrada serão:
// Número;
// Exemplo de Entrada:
// 10
// -----------------
// 3
// Exemplo de Saída:
// 55
// -----------------
// 6
function addUp() {
  let number = 3;
  let soma = 0;
  for (let index = 1; index <= number; index++) {
    if (index + number) {
      soma = soma + index;
    }
  }
  console.log(soma);
}
addUp();
