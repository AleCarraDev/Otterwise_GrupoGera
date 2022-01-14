/*5 - Escreva um programa para substituir os elementos pares pelo valor “X”.
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
Exemplo de Saída:
[1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127] */
const users = [
  { id: 3, name: "joao", active: false },
  { id: 2, name: "gabriel", active: false },
  { id: 1, name: "mari", active: true },
  { id: 0, name: "miguel", active: false },
];

const usersActive = users.filter((user) => {
  return user.active === true;
});

const usersDesactive = users.filter((user) => {
  return user.active === false;
});

const someUsersActive = users.some((user) => {
  return user.active === true;
});

const orderedArray = users.sort((a, b) => {
  return a.id - b.id;
});

console.log(usersActive);

console.log(usersDesactive.length);

console.log(someUsersActive);

console.log(orderedArray);
