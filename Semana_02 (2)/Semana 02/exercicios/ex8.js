// 6. Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parametro.
// Esses dois valores podem ser:
// 0: tesoura
// 1: papel
// 2: pedra
//     Construa um algoritmo que recebe esses valores randomicamente e printa na tela qual usuario
//     ganhou, se o usuario 1 ou usario 2

function rockPaperScissorsWinner() {
  let zero = "tesoura";
  let one = "papel";
  let two = "pedra";
  let user1Choice = Math.random();
  if (user1Choice < 0.34) {
    user1Choice = zero;
  } else if (user1Choice <= 0.67) {
    user1Choice = one;
  } else {
    user1Choice = two;
  }
  let user2Choice = Math.random();
  if (user2Choice < 0.34) {
    user2Choice = one;
  } else if (user2Choice <= 0.67) {
    user2Choice = two;
  } else {
    user2Choice = zero;
  }
  let winner;
  let compare = function (value1, value2) {
    if (value1 === "pedra" && value2 === "tesoura") {
      console.log(`${value1} ganha de ${value2}`);
    } else if (value1 === "tesoura" && value2 === "pedra") {
      console.log(`${value1} perde para ${value2}`);
    } else if (value1 === "tesoura" && value2 === "papel") {
      console.log(`${value1} ganha de ${value2}`);
    } else if (value1 === "papel" && value2 === "tesoura") {
      console.log(`${value1} perde para ${value2}`);
    } else if (value1 === "papel" && value2 === "pedra") {
      console.log(`${value1} ganha de ${value2}`);
    } else if (value1 === "pedra" && value2 === "papel") {
      console.log(`${value1} perde para ${value2}`);
    } else if (value1 === value2) {
      console.log("Empate!");
    }
  };
  console.log("Usuário 1: " + user1Choice);
  console.log("Usuário 2: " + user2Choice);
  compare(user1Choice, user2Choice);
  if ((user1Choice = winner)) {
    console.log("Usuário 1 ganhou");
  } else if ((user2Choice = winner)) {
    console.log("Usuário 2 ganhou");
  } else {
    console.log("Usuários empataram");
  } //resultado do vencedor ta dando errado, preciso arrumar
}

rockPaperScissorsWinner();
