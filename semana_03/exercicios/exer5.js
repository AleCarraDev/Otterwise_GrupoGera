/*5 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
imprime a sua tabuada do 1 ao 10.
OBS: Para melhorar a resolução desse problema, monte um código que aceite
um segundo valor e irá imprimir a tabuada de 1 até esse valor.*/

function multiplication(number, number2) {
  for (let i = 1; i <= number2; i++) {
    let result = number * i;
    console.log(number + " x " + i + " = " + result);
  }
}

multiplication(7, 10);
