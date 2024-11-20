import fs from "fs";

const path = "./fileSystem/files/products.json";

const readFile = fs.readFile(path, "utf-8", (error, success) => {
  if (error) {
    console.log(error);
  } else {
    const parseData = JSON.parse(success)
    const data = { title: "new product", price: 9000 };
    parseData.push(data);
    const stringData = JSON.stringify(parseData, null, 2);

    fs.writeFile(path, stringData, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Creado" + stringData);
      }
    });
  }
});