// 12 - Dado o objeto à seguir, imprima no console:
// O nome do dev.
// O segundo projeto.
// O nome do primeiro projeto.
// Entrada:
let dev = {
  name: "Juca",
  projects: [
    { name: "Projeto 1", start: "01/02/2021" },
    { name: "Projeto 2", start: "03/03/2021" },
  ],
};
// Saída Esperada:
// Juca
// { name: 'Projeto 2', start: '03/03/2021' }
// Projeto 1

console.log(dev.name);
console.log(dev.projects[1]);
console.log(dev.projects[0].name);
