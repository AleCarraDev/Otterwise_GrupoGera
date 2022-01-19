// 15 - Dado o array de objetos abaixo, faça um programa que calcule a média
// aritmética dos estudantes e imprima no console os nomes dos estudantes
// aprovados. A média de aprovação é 7.0.
// Os valores de entrada serão:
// Array de Objetos;
// Exemplo de Entrada:
let students = [
  { nome: "Marcos", notas: [10, 7, 2] },
  { nome: "Michele", notas: [10, 10, 10] },
  { nome: "Pedro", notas: [3, 10, 9] },
  { nome: "Andressa", notas: [6, 6, 8] },
  { nome: "Cristiana", notas: [7, 9, 2] },
];
// Exemplo de Saída:
// Michele
// Pedro

function calculateMedium() {
  let medium = 7;
  let notes = 0;
  for (let index = 0; index < students.length; index++) {
    notes =
      students[index].notas[0] +
      students[index].notas[1] +
      students[index].notas[2];
    if (notes / 3 > medium) {
      console.log(students[index].nome);
    }
  }
}
calculateMedium();

// for (let index = 0; index < numbers.length; index++) {
//     soma = soma + numbers[index];
//     soma += numbers[index];
