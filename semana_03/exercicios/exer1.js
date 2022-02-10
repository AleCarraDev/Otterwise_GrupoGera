/*1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
relação de notas necessárias. */
function totalDinheiro(valor) {
  const cedulas = {
    nota100: valor / 100,
    nota50: (valor % 100) / 50,
    nota20: (valor % 50) / 20,
    nota10: (((valor % 50) / 20) % 1) * 2,
    nota5: (valor % 10) / 5,
    nota2: (valor % 5) / 2,
    nota1: (((valor % 5) / 2) % 1) * 2,
  };

  return `para ${valor} serão
    ${Math.floor(cedulas.nota100)} nota(s) de R$100,00
    ${Math.floor(cedulas.nota50)}  nota(s) de R$50,00
    ${Math.floor(cedulas.nota20)}  nota(s) de R$20,00
    ${Math.floor(cedulas.nota10)}  nota(s) de R$10,00
    ${Math.floor(cedulas.nota5)}  nota(s) de R$05,00
    ${Math.floor(cedulas.nota2)}  nota(s) de R$02,00
    ${Math.floor(cedulas.nota1)}  moeda(s) de R$01,00
    `;
}

console.log(totalDinheiro(1000));
