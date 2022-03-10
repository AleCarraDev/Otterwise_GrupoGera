// 16 - Dado o objeto user = { name: "Marília", age: 26, job: "Dev" }, imprima cada
// // uma de suas propriedades da seguinte forma "o valor da propriedade
// // propriedade_nome é valor".
// // Saída esperada:
// // "o valor da propriedade name é Marília"
// // "o valor da propriedade age é 26"
// // "o valor da propriedade job é Dev"

let user = { name: "Marília", age: 26, job: "Dev" };
let propertyName = "name";
let propertyAge = "age";
let propertyJob = "job";

console.log(`O valor da propriedade ${propertyName} é ${user.name}`);
console.log(`O valor da propriedade ${propertyAge} é ${user.age}`);
console.log(`O valor da propriedade ${propertyJob} é ${user.job}`);
