/*Levando em consideração o array abaixo, adicione um novo elemento ao final do array com seu nome e imprima no console na ordem inversa.
[{name: “joao”, {name: “pedro”}}] */

const names = [{ name: "Alessandro" }, { name: "Deborah" }];

const newName = names.concat({ name: "Wilson Denise" }).reverse();

console.log(newName);
