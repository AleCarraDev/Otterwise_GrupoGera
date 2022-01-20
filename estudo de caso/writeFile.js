import fs from "fs";

const saveToJson = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos);
  fs.writeFileSync(fileName, parsedInfo);
};

export default saveToJson;
