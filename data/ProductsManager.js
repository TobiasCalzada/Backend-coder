import crypto from "crypto";

class ProductsManager {
  static #all = [
    {
      id: crypto.randomBytes(12).toString("hex"),
      category: "remera",
      title: "lana",
      price: "9000",
    },
    {
      id: crypto.randomBytes(12).toString("hex"),
      category: "pantalon",
      title: "lana",
      price: "9000",
    }
  ];
  //create metodo
  createId(data) {
    const promesa = new Promise((resolve, reject) => {
      try {
        data.id = crypto.randomBytes(12).toString("hex");
        ProductsManager.#all.push(data);
        console.log("exito al crear: id-" + data.id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    return promesa;
  }
  //metodo all
  readAll() {
    const resultado = new Promise((exito, fracaso) => {
      if (ProductsManager.#all.length > 0) {
        exito(ProductsManager.#all);
      } else {
        fracaso("Error al leer");
      }
    });
    return resultado;
  }
}

async function test() {
  const product = new ProductsManager();
  product.createId({
    category: "remera",
    title: "oversize",
    price: "3000",
  });

  product.createId({
    category: "remera",
    title: "tela",
    price: "7000",
  });

  product.createId({
    category: "remera",
    title: "lana",
    price: "9000",
  });

  product.createId({
    category: "Zapatilla",
    title: "cuero",
    price: "30000",
  });

  try {
    const allProducts = await product.readAll();
    console.log(allProducts);
  } catch (error) {
    console.log(error.message);
  }
}

//test();

const productsManager = new ProductsManager();

export default productsManager;
