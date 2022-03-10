// 3 - Dado um array de nomes, faça um programa que imprima na tela todos os
// nomes (na mesma linha).
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
// Angela, Rosa, Ticiana, Carla, Renata

arrayNames = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"];
let result = "";

for (let index = 0; index < arrayNames.length; index++) {
  const element = arrayNames[index];
  if (index === arrayNames.length - 1) {
    result = result + element;
  } else {
    result = result + element + ", ";
  }
}

console.log(result);
