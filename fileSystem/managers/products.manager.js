import fs, { write } from "fs";
import crypto from "crypto";


class ProductsManager {
  constructor(path) {
    this.path = path;
    this.exists();
  }

  exists() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    } else {
      console.log("file alredy exists");
    }
  }

  async readFileProducts() {
    try {
      const dataOfRead = await fs.promises.readFile(this.path, "utf-8");
      const parseDataOfRead = JSON.parse(dataOfRead);
      //sconsole.log(parseDataOfRead);
      return parseDataOfRead;
    } catch (error) {
      console.log(error);
    }
  }

  async creatOneProduct(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const allOneProduct = await this.readFileProducts();
      allOneProduct.push(data);
      const stringOneProduct = JSON.stringify(allOneProduct, null, 2);
      await fs.promises.writeFile(this.path, stringOneProduct);
      return data.id;
    } catch (error) {
      console.log(error);
    }
  }
}

const productsManager = new ProductsManager("./files/products.json");

export default productsManager;
