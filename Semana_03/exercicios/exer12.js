// 12 - [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
// funcionalidades no seu sistema de livros e para isso ele contratou um
// programador. Conversando com o programador e entendendo as necessidades
// que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
// ● Autor do livro mais vendido;
// ● Filtrar livros que tem um preço abaixo do valor que será inserido;
// ● Filtrar livros que tem um preço acima do valor que será inserido;
// ● Pesquisa pelo nome do livro;
// ● Pesquisa pelo autor do livro;
// ● Pesquisa pelo código do livro;
// ● Lista do Estoque;
// ● Top X livros mais vendidos (X será um valor inserido como entrada);
// ● Aumento de X % no preço dos livros (X será um valor inserido como
// entrada).
// Tendo por base as funcionalidades acima e como entrada um um array de
// objetos, faça um programa que resolva o problema do dono da livraria.
const bancoDB = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
    estoque: 10,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
    estoque: 20,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
    estoque: 30,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
    estoque: 40,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
    estoque: 50,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
    estoque: 60,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
    estoque: 40,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
    estoque: 05,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
    estoque: 04,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
    estoque: 03,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
    estoque: 09,
  },
];

function bestSeller(array) {
  for (let i = 0; i < array.length; i++) {
    for (let index2 = i + 1; index2 < array.length; index2++) {
      if (array[index2].quantidadeVendido > array[i].quantidadeVendido) {
        let aux = array[index2];
        array[index2] = array[i];
        array[i] = aux;
      }
    }
    return "O autor mais vendido é: " + array[i].autor;
  }
}
bestSeller(bancoDB);

function valueDown(entryArray, value) {
  for (let i = 0; i < entryArray.length; i++) {
    if (entryArray[i].valor < value) {
      console.log(entryArray[i]);
    }
  }
}

function valueUp(entryArray, value) {
  for (let i = 0; i < entryArray.length; i++) {
    if (entryArray[i].valor > value) {
      console.log(entryArray[i]);
    }
  }
}

function bookName(entryArray, string) {
  for (let i = 0; i < entryArray.length; i++) {
    if (entryArray[i].nome.indexOf(string) !== -1) {
      console.log(entryArray[i]);
    }
  }
}

function bookAutor(entryArray, string) {
  for (let i = 0; i < entryArray.length; i++) {
    if (entryArray[i].autor.indexOf(string) !== -1) {
      console.log(entryArray[i]);
    }
  }
}

function bookCod(entryArray, string) {
  for (let i = 0; i < entryArray.length; i++) {
    if (entryArray[i].cod.indexOf(string) !== -1) {
      console.log(entryArray[i]);
    }
  }
}

function stockList(entryArray) {
  for (let i = 0; i < entryArray.length; i++) {
    for (let index2 = i + 1; index2 < entryArray.length; index2++) {
      if (entryArray[index2].estoque > entryArray[i].estoque) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log(
      "O livro: " +
        entryArray[i].nome +
        ", possui " +
        entryArray[i].estoque +
        " unidades"
    );
  }
}

function top_x_Seller(entryArray, value) {
  for (let i = 0; i < value; i++) {
    for (let index2 = i + 1; index2 < value; index2++) {
      if (
        index2 < value &&
        entryArray[index2].quantidadeVendido > entryArray[i].quantidadeVendido
      ) {
        let aux = entryArray[index2];
        entryArray[index2] = entryArray[i];
        entryArray[i] = aux;
      }
    }
    console.log("O Top " + (i + 1) + " mais vendido é: " + entryArray[i].nome);
  }
}

function multiplicaValor(entryArray, value) {
  for (let i = 0; i < entryArray.length; i++) {
    let porcent = (value / 100) * entryArray[i].valor;
    entryArray[i].valor = entryArray[i].valor + Math.floor(porcent);

    console.log(entryArray[i]);
  }
}

multiplicaValor(bancoDB, 8);
