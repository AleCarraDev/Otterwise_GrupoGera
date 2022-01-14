/*14 - Uma loja online que possui a estrutura do objeto abaixo, precisa que
algumas funcionalidades sejam implementadas. Implemente a lista de
funcionalidades abaixo.
/*
    14 - Uma loja online que possui a estrutura do objeto abaixo, precisa que
    algumas funcionalidades sejam implementadas. Implemente a lista de
    funcionalidades abaixo.
*/

const market = [
  {
    cod: 128,
    name: "Notebook Asus 16gb + SSD 480Gb",
    stock: 15,
    price: 8980.45,
    category: "electronics",
  },
  {
    cod: 222,
    name: "Xbox Séries X 1TB",
    stock: 8,
    price: 4200,
    category: "Games",
  },
  {
    cod: 33,
    name: "T-Shirt Fluminense Home Kit 21-22 tam: M",
    stock: 3,
    price: 250,
    category: "sports",
  },
];

function sortByName(array) {
  const level = {
    ["Notebook Asus 16gb + SSD 480Gb"]: 0,
    ["T-Shirt Fluminense Home Kit 21-22 tam: M"]: 1,
    ["Xbox Séries X 1TB"]: 2,
  };

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (level[array[i].name] < level[array[j].name]) {
        temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }
  console.log(array);
}

function sortByCode(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].cod < array[j].cod) {
        temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }

  console.log(array);
}

function sortByStock(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].stock < array[j].stock) {
        temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }

  console.log(array);
}

function sortByPrice(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].price < array[j].price) {
        temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }

  console.log(array);
}

function sortByCategory(array) {
  const level = {
    electronics: 0,
    games: 1,
    sports: 2,
  };

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (level[array[i].category] < level[array[j].category]) {
        temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }
  console.log(array);
}

sortByName(market);

sortByCode(market);

sortByStock(market);

sortByPrice(market);

sortByCategory(market);
