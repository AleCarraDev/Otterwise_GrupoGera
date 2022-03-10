// 18 - Dado a lista de compra a seguir, faça um programa que imprime no console
// valor total. Atenção, o valor de cada item é unitário.
// Exemplo de Entrada:
let purchase = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];
// Exemplo de Saída:
// R$ 19.75

function buy(array) {
  let items;
  let result = 0;
  for (let index = 0; index < purchase.length; index++) {
    items = purchase[index].valor * purchase[index].quantidade;
    result = result + items;
    if (array) {
    }
  }
  console.log(`R$ ${result}`);
}
buy(purchase);
