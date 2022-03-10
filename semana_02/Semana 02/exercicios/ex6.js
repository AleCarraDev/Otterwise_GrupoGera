// 4. Crie uma função que conte quantas palavras existem na frase que
// for passada como parâmetro (dica: utilizem o método split de string)

function wordCount(phrase) {
  let result = phrase.split(" ");
  console.log(result.length);
}
wordCount("uma duas tres quatro cinco");
