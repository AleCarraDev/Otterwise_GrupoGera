/*9 - [REFATORAÇÃO] Dado a lista de compra a seguir, faça um programa que
imprime no console valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75 */
const market = [
  { nome: "maçã", quantidade: 5, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 3, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 4, valor: 0.63 },
  { nome: "Arroz", quantidade: 2, valor: 12 },
  { nome: "feijão", quantidade: 2, valor: 3.59 },
  { nome: "picanha", quantidade: 1, valor: 79.7 },
  { nome: "salsicha", quantidade: 2, valor: 3.9 },
];

const getTotal = (item) => item.quantidade * item.valor;

const sumProducts = (acc, price) => acc + price;

const totalMarket = market.map(getTotal).reduce(sumProducts);

console.log(`Total da compra: R$ ${totalMarket}`);
