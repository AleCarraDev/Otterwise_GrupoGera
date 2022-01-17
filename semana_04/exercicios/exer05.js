/*2. Levando em consideração o array de usuários abaixo: [{id: 3, name: “joao”, active: false},
     {id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true},
      {id: 0, name: “miguel”, active: false}]
Escreva um programa que imprime na tela o nome de todos os usuários ativos
Escreva um programa que imprime na tela quantos usuários não estão ativos
Escreva um programa que imprime na tela se existe algum usuário ativo
Escreva um programa que imprime na tela o array ordenado por id em ordem crescente */

const users = [
  { id: 3, name: "João", active: false },
  { id: 2, name: "Gabriel", active: false },
  { id: 1, name: "Mari", active: false },
  { id: 0, name: "Miguel", active: false },
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);

const inactiveUsers = users.filter((user) => !user.active);
console.log(`Usuários inativos: ${inactiveUsers.length}`);

const hasActive = users.some((user) => user.active);
if (hasActive) {
  console.log("Existe usuário ativo");
} else {
  console.log("Não existe usuário ativo");
}

const sortById = users.sort((a, b) => {
  return a.id - b.id;
});
