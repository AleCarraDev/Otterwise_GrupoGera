/*2 - Dado um array de números, faça um programa que teste se este array
contém um valor específico. Tanto o valor quanto o array serão valores de
entrada.
Exemplo de Entrada:
[1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
9
Exemplo de Saída:
O valor foi encontrado no Array. */

const array = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];

const find = array.some((number) => {
  if (number === 9) return "O valor foi encontrado no Array";
  else "O valor não foi encontrado no Array";
});
console.log(find);
