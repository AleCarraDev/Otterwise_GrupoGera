/*4 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
tela todos os nomes (na mesma linha).
Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata*/

let array = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"];

function nameArray(names) {
  let name = [];

  for (let i = 0; i < names.length; i++) {
    name[i] = names[i];
  }

  return name;
}

console.log(`${nameArray(array)}`);
