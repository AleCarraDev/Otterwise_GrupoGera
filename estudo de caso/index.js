//[x] criar uma função para ler a entrada do usuário;
//[x] criar uma função para buscar as informações do cep passado como parâmetro(logradouro, bairro, localidade, uf)
//[x] criar função para salvar os dados em um arquivo
//[x] intregras as funções
import { inputCep, searchFromCep } from "./cepHandlers.js";
import saveToJson from "./writeFile";

const main = async () => {
  const cep = inputCep();
  const { logradouro, bairro, localidade, uf } = await searchFromCep(cep);
  const data = {
    logradouro,
    bairro,
    uf,
    localidade,
  };
  saveToJson(data, "arquivo.json");
};

main();
