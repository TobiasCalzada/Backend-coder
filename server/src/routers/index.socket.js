import usersManager from "../data/Users.manager.js";
import productsManager from "../data/Products.manager.js";

const socketCb = async (socket) => {
  console.log(`socket connected id:` + socket.id);

  //creacion de usuario
  socket.on("new user", async (data) => {
    const id = await usersManager.creatOneUser(data);
    const allUser = await usersManager.readAllUsers();
    socket.emit("update users", allUser);
  });
  const allUser = await usersManager.readAllUsers();
  socket.emit("update users", allUser);

  //creacion de productos
  socket.on("product nuevo", async (data) => {
    const id = await productsManager.creatOneProduct(data);
    const allProducts = await productsManager.readAllProducts();
    socket.emit("actualizacion product", allProducts);
  });
  const allProducts = await productsManager.readAllProducts();
  socket.emit("actualizacion product", allProducts);

  //borrado de producto
  socket.on("delete product", async (productId) => {
    try {
      const productExists = await productsManager.readOneProduct(productId);
      if (!productExists) {
        socket.emit(
          "product delete error",
          `Error: Producto con ID ${productId} no existe.`
        );
        return;
      }
      const productDeleted = await productsManager.delete(productId);
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

  socket.on("product update", async (data) => {
    const product = await productsManager.readOneProduct(data.id);
    if (!product) {
      socket.emit("product not found", { id: data.id });
      return;
    }
  
    const updatedProduct = { ...product, ...data };
    const productUpdate = await productsManager.update(data.id, updatedProduct);
    socket.emit("actualizacion product", productUpdate);
  });
};

export default socketCb;
