import fs from "fs";

const path1 = "./fileSystem/files/products.json";
const path2 = "./fileSystem/files/users.json";

const existsProducts = fs.existsSync(path1);
const existsUsers = fs.existsSync(path2);

const data = JSON.stringify([]);

if (!existsProducts) {
  fs.writeFileSync(path1, data);
}

if (!existsUsers) {
  fs.writeFileSync(path2, data);
}

const dataProducts = JSON.parse(fs.readFileSync(path1, "utf-8"));
const dataUsers = JSON.parse(fs.readFileSync(path2, "utf-8"));
console.log(dataUsers);

const product1 = { title: "zapatilla", price: 1200 };
const product2 = { title: "remera", price: 2200 };

dataProducts.push(product1);
dataProducts.push(product2);

fs.writeFileSync(path1, JSON.stringify(dataProducts, null, 1));

console.log(dataProducts);