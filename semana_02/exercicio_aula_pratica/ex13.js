// 13 - Dado um array de nomes, faça um programa que tenha como entrada um
// valor à ser pesquisado e retorne se o nome existe ou não no array.
// Exemplo de Entrada:
// [‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
// ‘Carla’
// Exemplo de Saída:
// O nome Carla existe no Array.

let names = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
];

function findName(name) {
  for (let index = 0; index <= names.length; index++) {
    if (name === names[index]) {
      return `O nome ${name} existe no Array.`;
    }
  }
  return `O nome ${name} não existe no Array.`;
}

console.log(findName("Lucas"));
