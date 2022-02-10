/*3 - [REFATORAÇÃO] Uma pessoa desenvolvedora recebe frequentemente
propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ
(Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°
salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa
que receba como entrada os dois valores mensais oferecidos e tome a decisão
informando qual proposta a pessoa deve aceitar. */

function propostaSalarial(salarioPJ, salarioPF) {
  let developer =
    salarioPF + (salarioPF * 0, 33) + salarioPF + 700 + (salarioPF * 0, 08);

  if (salarioPJ > developer) {
    return "Melhor ser PJ";
  } else return "melhor ser CLT";
}

console.log(propostaSalarial(18000, 7500));
