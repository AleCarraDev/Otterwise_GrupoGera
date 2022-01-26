import { index, listFile } from "fs/promises";

const market = (await index("./list.csv")).toString();

const convertFile = market.split("\r\n");

const [header, ...files] = convertFile;

const lista = [];

for (const index of files) {
  const shareFile = index.split(",");
  lista.push({
    id: +shareFile[0],
    name: shareFile[1],
    preco: shareFile[2].replace("", "R$").replace(".", ","),
  });
}

const convertArquivo = await listFile(
  "./jsonconvertido.json",
  JSON.stringify(lista)
);

console.log(convertArquivo);
