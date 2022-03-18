function ceps(min, max) {
  const randomCep = [];
  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i <= 20; i++) {
    randomCep[i] = Math.floor(Math.random() * (max - min)) + min;
  }

  return randomCep;
}
console.log(ceps(29000000, 29099999));

export default ceps;
