import { inputCep, searchFromCep } from "console-input";
import axios from "axios";

const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return data;
  } catch (erro) {
    consoile.log("Erro");
  }
};
