// 5. Através do array de usuários abaixo imprima no console todas a skills que cada usuario tem:
const users = [
  {
    name: "Joao",
    skills: ["Javascript", "ReactJS", "Redux"],
  },
  {
    name: "Pedro",
    skills: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function showSkills() {
  for (let index = 0; index < users.length; index++) {
    if (users[index].skills) {
      console.log(users[index].skills);
    }
  }
}
showSkills();
