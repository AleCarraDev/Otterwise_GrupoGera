// 3. Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostra o maior numero da
// lista

let myArray = [6, 21, 9, 2, 50, 98, 1];

function showHigher() {
  let result = 0;
  let higher = myArray[0];
  for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] > higher) {
      higher = myArray[index];
    }
  }
  console.log(higher);
}
showHigher();
