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

const formatName = (name) => {
  const stringsName = name.trim().split(" ");

  const formattedName = stringsName
    .map((item) => {
      const string = item[0].toUpperCase() + item.slice(1);
      return string;
    })
    .join(" ");

  return formattedName;
};

const formatCpf = (cpf) => {
  const newCpf = cpf.replace(
    /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,
    "$1.$2.$3-$4"
  );
  return newCpf;
};

const formatPhone = (phone) => {
  const newPhone = phone.replace(
    /([0-9]{2})([0-9]{4})([0-9]{4})/,
    "($1) $2-$3"
  );
  return newPhone;
};

const formatterArray = (array) => {
  const newArray = array.map(({ nome, cpf, telefone }) => {
    nome = formatName(nome);
    cpf = formatCpf(cpf);
    telefone = formatPhone(telefone);

    return { nome, cpf, telefone };
  });
  console.log("Dados Formatados:\n", newArray);
};

export default formatterArray;
