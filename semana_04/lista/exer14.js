// 14 - Uma empresa gostaria de organizar seu quadro de funcionários, para isso
// contratou o estagiário Juquinha para criar um software. O CEO da empresa fez
// uma lista de pedidos para o Juquinha.
//
// Pedidos:
// ● A - Função para retornar apenas o funcionário com o id informado:
// ● B - Função para filtrar apenas os funcionários ativos na empresa:
// ● C - Função para filtrar apenas funcionários clt
// ● D - Função para criar uma nova estrutura onde cada funcionário receberá
// uma nova informação de base salarial
// ● E - Função onde separa em 2 grupos os funcionários pj e clt
// ● F - Função que retorna apenas funcionários ativos ordenados por ordem
// de idade

const funcionarios = [
  {
    id: 1,
    name: "joão",
    age: 35,
    active: false,
    birth_date: "22/02/1999",
    contract_date: "11/02/2017",
    job: "backend",
    type: "pj",
  },
  {
    id: 2,
    name: "Alessandro",
    age: 30,
    active: true,
    birth_date: "05/06/1992",
    contract_date: "03/12/2021",
    job: "front-end",
    type: "pj",
  },
  {
    id: 3,
    name: "Déborah",
    age: 25,
    active: true,
    birth_date: "11/01/1996",
    contract_date: "12/06/2021",
    job: "back-end",
    type: "clt",
  },
  {
    id: 4,
    name: "Rodrigo",
    age: 32,
    active: false,
    birth_date: "08/12/1989",
    contract_date: "15/08/2017",
    job: "front-end",
    type: "pj",
  },
  {
    id: 5,
    name: "Ricardo",
    age: 37,
    active: true,
    birth_date: "10/11/1984",
    contract_date: "03/08/2015",
    job: "front-end",
    type: "clt",
  },
  {
    id: 6,
    name: "Pedro",
    age: 29,
    active: true,
    birth_date: "08/12/1993",
    contract_date: "26/01/20",
    job: "fullstack",
    type: "clt",
  },
  {
    id: 7,
    name: "Danielle",
    age: 27,
    active: false,
    birth_date: "27/01/1994",
    contract_date: "23/05/2019",
    job: "designer",
    type: "pj",
  },
  {
    id: 8,
    name: "Renata",
    age: 31,
    active: true,
    birth_date: "10/11/1990",
    contract_date: "18/09/2017",
    job: "marketing",
    type: "clt",
  },
  {
    id: 9,
    name: "Rafael",
    age: 28,
    active: true,
    birth_date: "08/12/1993",
    contract_date: "14/11/2020",
    job: "financeiro",
    type: "clt",
  },
];

console.log("BUSCA POR ID:\n");
const findById = funcionarios.find((id) => {
  if (id.id === 2) return id;
});

console.log(findById);

console.log("FUNCIONÁRIOS ATIVOS:\n");
const filterActives = funcionarios.filter((active) => active.active);

console.log(filterActives);

console.log("FUNCIONÁRIOS CLT:\n");
const filterCLT = funcionarios.filter((funcionario) => {
  if (funcionario.type === "clt") return funcionario;
});

console.log(filterCLT);

console.log("NOVA ESTRUTURA SALARIAL:\n");
console.log("FUNCIONÁRIOS SEPARADOS POR PJ E CLT:\n");

const cltPjGroups = funcionarios.reduce(
  (acc, funcionario) => {
    if (funcionario.type === "clt") {
      console.log("GRUPO CLT: \n", funcionario);
    }
    if (funcionario.type === "pj") console.log("GRUPO PJ: \n", funcionario);
  },
  {
    clt: 0,
    pj: 0,
  }
);

console.log(cltPjGroups);

console.log("FUNCIONÁRIOS ATIVOS ORDENADOS POR IDADE:\n");
const filterByAge = filterActives.sort((a, b) => a.age - b.age);

console.log(filterByAge);
