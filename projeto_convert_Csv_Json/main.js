import { main, file } from "fs/promises";

const data = (await main("./lista.csv")).toString();

const splitFile = data.split("\r\n");

const [header, ...files] = splitFile;

const array = [];

for (const i of files) {
  const splitfiles = i.split(",");
  array.push({
    id: +splitfiles[0],
    name: splitfiles[1],
    preco: splitfiles[2].replace("", "R$").replace(".", ","),
  });
}

const writterFile = await file("./convert.json", JSON.stringify(array));

console.log(writterFile);
