/*10 - [REFATORAÇÃO] Dado a lista de compras a seguir, faça um programa que
imprime no console o valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75 */

const mercado = [
  { nome: "maçã", quantidade: 5, valor: 2.5 },
  { nome: "alface", quantidade: 1, valor: 1.99 },
  { nome: "Água 5L", quantidade: 4, valor: 7.99 },
  { nome: "Pão Francês", quantidade: 4, valor: 1.25 },
];

function totalPay(compras) {
  let totalPago = 0;

  for (let i = 0; i < compras.length; i++) {
    itemTotal = compras[i].quantidade * compras[i].valor;
    totalPago += itemTotal;
  }

  return totalPago;
}

console.log(`R$ ${totalPay(mercado)}`);
