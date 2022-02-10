// 17 - Dado o array de objetos a seguir, crie um algoritmo que imprimirá no
// console se o user é dev ou não, conforme a saída esperada à seguir.
// Importante: DEVE ser na mesma linha.
// Entrada:
let users = [
  { name: "Marília", age: 26, job: "Dev" },
  { name: "Juca", age: 21, job: "RH" },
  { name: "Flávia", age: 30, job: "Financeiro" },
  { name: "Sérgio", age: 24, job: "Dev" },
];
// Saída esperada:
// 'Marília é dev. Juca não é dev. Flávia não é dev. Sérgio é dev.'

function showDev() {
  for (let index = 0; index < users.length; index++) {
    if (users[index].job === "Dev") {
      console.log(`${users[index].name} é Dev`);
    } else if (users[index].job !== "Dev") {
      console.log(`${users[index].name} não é Dev`);
    }
  }
}
showDev();
