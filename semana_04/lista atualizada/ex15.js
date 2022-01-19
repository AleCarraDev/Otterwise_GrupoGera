/*15 - [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
funcionalidades no seu sistema de livros e para isso ele contratou um
programador. Conversando com o programador e entendendo as necessidades
que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
● Autor do livro mais vendido;                                           feito
● Filtrar livros que tem um preço abaixo do valor que será inserido;
● Filtrar livros que tem um preço acima do valor que será inserido;
● Pesquisa pelo nome do livro;
● Pesquisa pelo autor do livro;
● Pesquisa pelo código do livro;
● Lista do Estoque;                                                      feito
● Top X livros mais vendidos (X será um valor inserido como entrada);    feito
● Aumento de X % no preço dos livros (X será um valor inserido como
entrada).
Tendo por base as funcionalidades acima e como entrada um um array de
objetos, faça um programa que resolva o problema do dono da livraria.
Exemplo de Entrada
*/
const theBooks = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
];
const livroMaisVendido = theBooks.sort((a, b) => {
  return b.quantidadeVendido - a.quantidadeVendido;
});

const autorMaisVendido = livroMaisVendido.find((escritor, i) => {
  if (i === 0) {
    return escritor.autor;
  }
});
const livroEmConta = 30;

const livroBarato = theBooks.filter((value) => {
  if (value.valor < livroEmConta) {
    return value;
  }
});
const livroCarissimo = 90;

const livroCaro = theBooks.filter((value) => {
  if (value.valor > livroCarissimo) {
    return value;
  }
});

const pesquisarLivro = "empresas feitas para vencer";

const pesquisarPorNome = theBooks.find((nomeLivro) => {
  if (nomeLivro.nome === pesquisarLivro) {
    return nomeLivro;
  }
});

const buscarAutor = "Charles Duhigg";

const pesquisarAutor = theBooks.find((nomeAutor) => {
  if (nomeAutor.autor === buscarAutor) {
    return nomeAutor;
  }
});

const buscarCodigo = "855080455X";

const numeroCodigo = theBooks.find((codigo) => {
  if (codigo.cod === buscarCodigo) {
    return codigo;
  }
});
const listaLivroMaisVendido = 3;
const filtro = livroMaisVendido.filter((primeiraPosição, i) => {
  if (i < listaLivroMaisVendido) {
    return primeiraPosição;
  }
});
const percentual = 0.1;
const novoPreco = theBooks.map((novoValor) => {
  let valores = novoValor.valor * 0.1 + novoValor.valor;
  return valores.toFixed(2);
});
console.log(
  `Aumento de ${percentual * 100} % nos livros, confira os novos preços em:`,
  novoPreco
);
console.log(
  `O 1° lugar é ${listaLivroMaisVendido} dos livros mais vendidos `,
  filtro
);
console.log(`O codigo do livro é: `, numeroCodigo);

console.log(`O nome do autor do livro é: `, pesquisarAutor);

console.log(livroCaro);

console.log(`O livro mais em conta é: `, livroBarato);

console.log(`O livro encontrado é: `, pesquisarPorNome);

console.log(`O Autor do livro mais vendido é: `, autorMaisVendido);

console.log(`O livro mais vendido é: `, livroMaisVendido);

theBooks.forEach((theBook) => {
  console.log(
    `O estoque total é:
  `,
    theBook
  );
});
