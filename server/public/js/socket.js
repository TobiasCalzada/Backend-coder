const socket = io();

document.addEventListener("DOMContentLoaded", () => {
  let isOnline = false;

  // Form de creación de usuarios
  const registerBtn = document.querySelector("#register");
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const photo = document.querySelector("#photo").value;
      const role = document.querySelector("#role").value;

      if (!name || !email || !password || !photo || !role) {
        alert("Complete todos los campos.");
        return;
      }

      const userData = { name, email, password, photo, role, isOnline };
      socket.emit("new user", userData);
    });
  }

  socket.on("update users", (data) => {
    data = data
      .map((each) => `<div>${each.name} - ${each.email}</div>`)
      .join("");
    document.querySelector("#update").innerHTML = data;
  });

  // Form de creación de productos
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", () => {
      const title = document.querySelector("#titleCreate").value;
      const category = document.querySelector("#categoryCreate").value;
      const price = document.querySelector("#priceCreate").value;
      const photoP = document.querySelector("#photoCreate").value;
      const stock = document.querySelector("#stockCreate").value;

      if (!title || !category || !price || !photoP || !stock) {
        alert("Complete todos los campos.");
        return;
      }

      const productsData = { title, category, price, photoP, stock };
      socket.emit("product nuevo", productsData);
    });
  }

  socket.on("actualizacion product", (data) => {
    const lastOneProducts = data.slice(-1);
    const productHTML = lastOneProducts
      .map((each) => `<div>${each.id}</div>`)
      .join("");
    document.querySelector("#idProduct").innerHTML = productHTML;
  });

  // Evento para eliminar un producto
  const createBtnDeleted = document.querySelector("#deletedProduct");
  createBtnDeleted.addEventListener("click", () => {
    const idDeletedSocket = document.querySelector(
      "#deletedProductInput"
    ).value;
    socket.emit("delete product", idDeletedSocket);
  });
  socket.on("product deleted", (data) => {
    document.querySelector("#productdeletedIdText").innerHTML = data;
  });
  socket.on("product delete error", (data) => {
    document.querySelector("#productdeletedIdText").innerHTML = data;
  });

  // Form de actualización de productos
  const createBtnUpdate = document.querySelector("#updateForm");
  if (createBtnUpdate) {
    createBtnUpdate.addEventListener("click", () => {
      const idUpdateInput = document.querySelector("#updateProductInput").value;
      const title = document.querySelector("#titleUpdate").value;
      const category = document.querySelector("#categoryUpdate").value;
      const price = document.querySelector("#priceUpdate").value;
      const photoP = document.querySelector("#photoUpdate").value;
      const stock = document.querySelector("#stockUpdate").value;

      if (!idUpdateInput) {
        alert("Ingrese el id del producto");
        return;
      }

      // Solo incluimos en los datos aquellos campos que no están vacíos o nulos
      const productsDataUpdate = { id: idUpdateInput };
      if (title) productsDataUpdate.title = title;
      if (category) productsDataUpdate.category = category;
      if (price) productsDataUpdate.price = price;
      if (photoP) productsDataUpdate.photoP = photoP;
      if (stock) productsDataUpdate.stock = stock;

      socket.emit("product update", productsDataUpdate);
    });
  }
});
