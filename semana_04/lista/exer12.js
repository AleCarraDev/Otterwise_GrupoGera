/*12 - [REFATORAÇÃO] Dado o objeto abaixo, faça um programa que imprime no
console o nome, cpf e telefone formatados. Dica: Separe o código em funções
de formatação para cada um dos campos.
Exemplo de Entrada 1:
{nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}
Exemplo de Saída 1:
Analu dos Santos Baptista
147.762.139-31
(83) 2800-8258
Exemplo de Entrada 2:
{nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone:
'11988754092'}
Exemplo de Saída 2:
Cláudio da silva figueiredo
471.879.998-87
(11) 98875-4092 */
const fixInformation = {
  nome: "Analu dos santos baptista",
  cpf: "14776213931",
  telefone: "8328008258",
};

console.log("Nome: " + fixInformation.nome);
console.log(
  "CPF: " + fixInformation.cpf.replace("14776213931", "147.762.139-31")
);
console.log(
  "Telefone: " + fixInformation.telefone.replace("8328008258", "(83) 2800-8258")
);
