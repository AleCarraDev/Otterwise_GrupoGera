/*13 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
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
const Problema02 = () => {
  const arrayEntrada = [
    { id: 1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { id: 2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { id: 3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { id: 4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { id: 5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    {
      id: 6,
      nome: "Patrícia",
      idade: 19,
      salario: 10000,
      senioridade: "pleno",
    },
    { id: 7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
  ];

  const ordemSenioridade = {
    senior: 4,
    pleno: 3,
    junior: 2,
    estagio: 1,
  };

  function ordenaCresc(array, filtro) {
    console.log("Ordenado por: ", filtro);
    return filtro === "senioridade"
      ? array.sort(
          (a, b) =>
            ordemSenioridade[a.senioridade] - ordemSenioridade[b.senioridade] ||
            a.id - b.id
        )
      : array.sort((a, b) => a[filtro] - b[filtro] || a.id - b.id);
  }

  function ordenaDecresc(array, filtro) {
    console.log("Ordenado por: ", filtro);
    return filtro === "senioridade"
      ? array.sort(
          (a, b) =>
            ordemSenioridade[b.senioridade] - ordemSenioridade[a.senioridade] ||
            b.id - a.id
        )
      : array.sort((a, b) => b[filtro] - a[filtro] || b.id - a.id);
  }

  function somaSalarios(array) {
    return array.reduce((acc, elem) => {
      acc += elem.salario;
      return acc;
    }, 0);
  }

  function filtrarArray(array, filtro, valor) {
    console.log(`Filtrado por: ${filtro} (${valor})`);
    return array.filter((elem) => elem[filtro] === valor);
  }

  console.log("Ordem Crescente:", ordenaCresc(arrayEntrada, "salario"));
  console.log("Ordem Decrescente:", ordenaDecresc(arrayEntrada, "senioridade"));
  console.log("Filtro: ", filtrarArray(arrayEntrada, "senioridade", "senior"));
  console.log("Soma dos salários: R$", somaSalarios(arrayEntrada));
};

export default Problema02;
