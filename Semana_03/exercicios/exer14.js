/*14 - Uma loja online que possui a estrutura do objeto abaixo, precisa que
algumas funcionalidades sejam implementadas. Implemente a lista de
funcionalidades abaixo.
/*
    14 - Uma loja online que possui a estrutura do objeto abaixo, precisa que
    algumas funcionalidades sejam implementadas. Implemente a lista de
    funcionalidades abaixo.
*/

const extraMarket = [
  {
    cod: 10,
    name: "Pneu 15",
    stock: 1500,
    price: 799.99,
    category: "Car",
  },
  {
    cod: 20,
    name: "Iphone 11",
    stock: 150,
    price: 4.599,
    category: "Smartphone",
  },
  {
    cod: 30,
    name: "SmartTv 50 Polegadas",
    stock: 300,
    price: 3.799,
    category: "Eletronics",
  },
];

function nomeProduto(array) {
  const level = {
    ["Pneu 15"]: 0,
    ["Iphone 11"]: 1,
    ["SmarTV 50 Polegadas"]: 2,
  };

  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (level[array[index].name] < level[array[index2].name]) {
        subName = array[index];
        array[index] = array[index2];
        array[index2] = subName;
      }
    }
  }
  console.log(array);
}

function codigoProduto(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index].cod < array[index2].cod) {
        subName = array[index];
        array[index] = array[index2];
        array[index2] = subName;
      }
    }
  }

  console.log(array);
}

function estoqueProduto(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index].stock < array[index2].stock) {
        subName = array[index];
        array[index] = array[index2];
        array[index2] = subName;
      }
    }
  }

  console.log(array);
}

function precoProduto(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index].price < array[index2].price) {
        subName = array[index];
        array[index] = array[index2];
        array[index2] = subName;
      }
    }
  }

  console.log(array);
}

function categoriaProduto(array) {
  const level = {
    Car: 0,
    Smartphone: 1,
    Eletronics: 2,
  };

  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (level[array[index].category] < level[array[index2].category]) {
        subName = array[index];
        array[index] = array[index2];
        array[index2] = subName;
      }
    }
  }
  console.log(array);
}

nomeProduto(extraMarket);

codigoProduto(extraMarket);

estoqueProduto(extraMarket);

precoProduto(extraMarket);

categoriaProduto(extraMarket);
