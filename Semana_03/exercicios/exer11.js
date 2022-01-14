/*11 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
Humanos precisava organizar algumas informações a respeito dos funcionários.
Para que isso fosse possível, ele precisava criar um programa que entregasse a
lista de funcionalidades abaixo.
Tendo como entrada um array de objetos crie funções que realizam as seguintes
operações:
● Ordena o Array em ordem crescente por idade;
● Ordena o Array em ordem decrescente por idade;
● Ordena o Array em ordem crescente por salário;
● Ordena o Array em ordem decrescente por salário;
● Ordena o Array em ordem crescente por senioridade;
● Ordena o Array em ordem decrescente por senioridade;
OBS: Tente melhorar esse exercício utilizando os conhecimentos novos que você
aprendeu na aula anterior.
Exemplo de Entrada:
[
{ nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
{ nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
{ nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
{ nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
{ nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
{ nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
{ nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
] */

const arrayData = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

function listaArrayNome(entryArray) {
  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].idade < entryArray[i].idade) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(entryArray[i]);
  }
}

function listaArrayIdade(entryArray) {
  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].idade > entryArray[i].idade) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(entryArray[i]);
  }
}

function listaArraySalario(entryArray) {
  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].salario < entryArray[i].salario) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(entryArray[i]);
  }
}

function listaArraySenioridade(entryArray) {
  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].salario > entryArray[i].salario) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(entryArray[i]);
  }
}

function listaArray(entryArray) {
  if (entryArray.senioridade == "junior" || "Junior") {
    entryArray.senioridade = 1;
  } else if (entryArray.senioridade == "pleno" || "Pleno") {
    entryArray.senioridade = 2;
  } else if (entryArray.senioridade == "senior" || "Senior") {
    entryArray.senioridade = 3;
  } else if (entryArray.senioridade == "estagio" || "Estagio") {
    entryArray.senioridade = 0;
  }

  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].senioridade < entryArray[i].senioridade) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(entryArray[i]);
  }
}

function listaArrayTrampo(entryArray) {
  if (entryArray.senioridade == "junior" || "Junior") {
    entryArray.senioridade = 1;
  } else if (entryArray.senioridade == "pleno" || "Pleno") {
    entryArray.senioridade = 2;
  } else if (entryArray.senioridade == "senior" || "Senior") {
    entryArray.senioridade = 3;
  } else if (entryArray.senioridade == "estagio" || "Estagio") {
    entryArray.senioridade = 0;
  }

  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].senioridade > entryArray[i].senioridade) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }

    if (entryArray.senioridade == 1) {
      entryArray.senioridade = "Junior";
    } else if (entryArray.senioridade == 2) {
      entryArray.senioridade = "Pleno";
    } else if (entryArray.senioridade == 3) {
      entryArray.senioridade = "Senior";
    } else if (entryArray.senioridade == 0) {
      entryArray.senioridade = "estagio";
    }
    console.log(entryArray[i]);
  }
}

listaArrayNome(arrayData);
listaArrayIdade(arrayData);
listaArraySalario(arrayData);
listaArraySenioridade(arrayData);
listaArray(arrayData);
listaArrayTrampo(arrayData);
