//[x] criar uma função para ler a entrada do usuário;
//[x] criar uma função para buscar as informações do cep passado como parâmetro(logradouro, bairro, localidade, uf)
//[x] criar função para salvar os dados em um arquivo
//[x] intregras as funções

import { input } from "console-input";
import axios from "axios";
import fs from "fs";
import { INSPECT_MAX_BYTES } from "buffer";
const inputCep = () => input("Digite seu cep: ");

inputCep();

const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return data;
  } catch (erro) {
    consoile.log("Erro");
  }
};

const saveToJson = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos);
  fs.writeFileSync(fileName, parsedInfo);
};

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
