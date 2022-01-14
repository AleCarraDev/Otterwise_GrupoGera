/*4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

const users = ["joao", "pedro", "Gabriel", "Mari"];

const newUsers = users.map((user, index) => {
  return {
    id: index,
    name: user,
  };
});

console.log(newUsers);
