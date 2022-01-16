// 7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
// retorne uma lista com os alunos que tiraram 0 em todas as provas.
// Exemplo de Entrada:
// [
// {nome: ,
// notas: [ ]
// ]
const notas = [
  { nome: "tiago", notas: [10, 2, 6] },
  { nome: "danielle", notas: [0, 2, 6] },
  { nome: "carolina", notas: [0, 0, 0] },
  { nome: "joao", notas: [0, 0, 0] },
  { nome: "arthur", notas: [2, 2, 6] },
  { nome: "gian", notas: [0, 2, 3] },
  { nome: "lucas", notas: [0, 0, 0] },
  { nome: "fernando", notas: [0, 0, 0] },
  { nome: "welligton", notas: [1, 2, 5] },
  { nome: "rodrigo", notas: [0, 4, 6] },
  { nome: "alessandro", notas: [1, 0, 0] },
  { nome: "victor", notas: [0, 0, 0] },
  { nome: "gustavo", notas: [6, 2, 5] },
  { nome: "brenda", notas: [0, 2, 9] },
  { nome: "rafael", notas: [0, 0, 0] },
  { nome: "lucas oliveira", notas: [0, 0, 0] },
];

const zero1 = (arrayNota) => {
  let zero2 = [];
  let zero3 = (valor) => valor === 0;
  arrayNota.forEach((element) => {
    if (element.notas.every(zero3)) {
      zero2.push(element.nome);
    }
  });
  return zero2;
};

console.log(zero1(notas));
