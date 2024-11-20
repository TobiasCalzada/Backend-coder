import usersManager from "../data/Users.manager.js";
import productsManager from "../data/Products.manager.js";
import usersMongoManager from "../data/mongo/managers/user.mongo.js";
import productsMongoManager from "../data/mongo/managers/product.mongo.js";
import cartsMongoManager from "../data/mongo/managers/cart.mongo.js";
import MongoManager from "../data/mongo/managers/mongo.manager.js";

const socketCb = async (socket) => {
  console.log(`socket connected id:` + socket.id);

  //creacion de usuario
  socket.on("new user", async (data) => {
    const id = await usersMongoManager.create(data);
    const allUser = await usersMongoManager.readAll();
    socket.emit("update users", allUser);
  });
  const allUser = await usersMongoManager.readAll();
  socket.emit("update users", allUser);


  //creacion de productos
  socket.on("product nuevo", async (data) => {
    const id = await productsMongoManager.create(data);
    const allProducts = await productsMongoManager.readAll();
    socket.emit("actualizacion product", allProducts);
  });
  const allProducts = await productsMongoManager.readAll();
  socket.emit("actualizacion product", allProducts);


  //borrado de producto
  socket.on("delete product", async (productId) => {
    try {
      const productExists = await productsMongoManager.read(productId);
      if (!productExists) {
        socket.emit(
          "product delete error",
          `Error: Producto con ID ${productId} no existe.`
        );
        return;
      }
      const productDeleted = await productsMongoManager.destroy(productId);
      socket.emit(
        "product deleted",
        `Producto con ID ${productId} ha sido eliminado.`
      );
    } catch (error) {
      socket.emit(
        "product delete error",
        `Error al eliminar el producto con ID ${productId}: ${error.message}`
      );
    }
  });

  //actualizacion de producto
  socket.on("product update", async (data) => {
    const product = await productsMongoManager.read(data.id);
    if (!product) {
      socket.emit("product not found", { id: data.id });
      return;
    }
  
    const updatedProduct = { ...product, ...data };
    const productUpdate = await productsMongoManager.update(data.id, updatedProduct);
    socket.emit("actualizacion product", productUpdate);
  });
};

export default socketCb;
