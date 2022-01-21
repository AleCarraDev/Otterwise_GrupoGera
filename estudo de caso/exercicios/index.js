/*1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. 
Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. 
Use essa informação para gerar os CEP’s dentro dessa faixa.
Math.floor
Math.random
Soft Skills Voltadas à Prática - Pesquisa e Resolução de Problema

2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo 
JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP 
consultado para cada um dos CEP’s válidos.
Observação: escreva o arquivo apenas com ceps válidos 
e que tiveram retorno da api. */
import { inputCeps, searchFromCep } from "./usingCeps.js";

const multiplesCep = async () => {
  try {
    const cep = inputCeps();
    const { logradouro, bairro, localidade, uf } = await searchFromCep(cep);
    const data = {
      logradouro,
      bairro,
      localidade,
      uf,
    };
    saveToJSON(data, "arquivo.json");
  } catch (error) {
    console.log("Erro");
  }
};

multiplesCep();
