// 2. Crie um algoritmo que tem como entrada um objeto e imprime no console os nomes dos projetos ativos
//  do usuário.
let user = {
  name: "Juca",
  projects: [
    { name: "Projeto 1", start: "01/02/2021", active: true },
    { name: "Projeto 2", start: "03/03/2021", active: false },
    { name: "Projeto 3", start: "10/08/2021", active: true },
    { name: "Projeto 4", start: "20/08/2021", active: false },
    { name: "Projeto 5", start: "18/10/2021", active: true },
  ],
};
// let active = user.projects
// console.log(active[0].active)

function checkActive() {
  for (let index = 0; index < user.projects.length; index++) {
    if (user.projects[index].active) {
      console.log(user.projects[index]);
    }
  }
}
checkActive();
