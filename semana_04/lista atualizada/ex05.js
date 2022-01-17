/*5 - Escreva um programa para substituir os elementos pares pelo valor “X”.
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
Exemplo de Saída:
[1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127] */
const users = [
  { id: 3, name: "Alessandro", active: false },
  { id: 2, name: "Rodrigo", active: false },
  { id: 1, name: "Gustavo", active: true },
  { id: 0, name: "Victor", active: false },
  { id: 4, name: "joao", active: false },
  { id: 5, name: "Arthur", active: false },
  { id: 6, name: "Tiago", active: true },
  { id: 9, name: "Daniele", active: false },
  { id: 8, name: "Carolina", active: false },
  { id: 7, name: "Brenda", active: false },
  { id: 10, name: "Lucas", active: true },
  { id: 11, name: "Gian", active: false },
];

const usuarioAtivo = users.filter((user) => {
  return user.active === true;
});

const usuarioInativo = users.filter((user) => {
  return user.active === false;
});

const userSome = users.some((user) => {
  return user.active === true;
});

const userSort = users.sort((a, b) => {
  return a.id - b.id;
});

console.log(usuarioAtivo);

console.log(usuarioInativo.length);

console.log(userSome);

console.log(userSort);
