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

  async readFileProducts(category) {
    try {
      const dataOfRead = await fs.promises.readFile(this.path, "utf-8");
      const parseDataOfRead = JSON.parse(dataOfRead);
      //sconsole.log(parseDataOfRead);
      if (category) {
        const filterData = parseDataOfRead.filter(
          (each) => each.category === category
        );
        return filterData;
      } else {
        return parseDataOfRead;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async read(id) {
    try {
      const all = await this.readFileProducts();
      const one = all.find((each) => each.id === id);
      return one;
    } catch (error) {
      console.log(error);
      throw error;
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

  async update(id, newData) {
    try {
      const all = await this.readFileProducts();
      const index = all.findIndex((product) => product.id === id);
      if (index === -1) {
        return null;
      }
      all[index] = { ...all[index], ...newData };
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return all[index];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  async delete(id) {
    try {
      const all = await this.readFileProducts();
      const filteredProducts = all.filter((product) => product.id !== id);
      if (all.length === filteredProducts.length) {
        return null
      }
      const stringAll = JSON.stringify(filteredProducts, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return `Product with id ${id} deleted`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}


const productsManager = new ProductsManager("./src/data/files/products.json");

export default productsManager;
