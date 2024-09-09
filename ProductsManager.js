class ProductsManager {
  static #all = [];
  static #id = 0;
  //create metodo
  create(data) {
    try {
      data.id = ProductsManager.#id;
      ProductsManager.#all.push(data);
      ProductsManager.#id++;
      console.log("Exito al crear " + data.id);
    } catch (error) {
      console.log("Error al crear un producto: " + error.message);
    }
  }
  //metodo all
  async readAll() {
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
  product.create({
    category: "remera",
    title: "oversize",
    price: "3000",
  });

  product.create({
    category: "remera",
    title: "tela",
    price: "7000",
  });

  product.create({
    category: "remera",
    title: "lana",
    price: "9000",
  });

  try {
    const allProducts = await product.readAll();
    console.log(allProducts);
  } catch (error) {
    console.log(error.message);
  }
}

test();
