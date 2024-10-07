import productsManager from "../data/products.manager.js";

async function getAllProducts(req, res, next) {
  try {
    let { category } = req.query;
    let responseOfProducts;

    if (!category) {
      responseOfProducts = await productsManager.readAllProducts();
    } else {
      responseOfProducts = await productsManager.readAllProducts(category);
    }

    if (responseOfProducts.length > 0) {
      return res
        .status(200)
        .json({ message: "Products read", responseOfProducts });
    } else {
      const error = new Error("Not found category");
      error.statuscode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function create(req, res, next) {
  try {
    const { title, photo, price, stock } = req.params;
    let { category } = req.query;
    if (!category) {
      category = "the category was not assigned";
    }

    const response = await productsManager.creatOneProduct({
      title,
      photo,
      price,
      stock,
      category,
    });
    return res.status(201).json({ message: "Product create", response });
  } catch (error) {
    return next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const { pid } = req.params;
    const responseId = await productsManager.readOneProduct(pid);
    if (responseId) {
      return res.status(200).json({ message: "product id: ", responseId });
    } else {
      const error = new Error("Not found product Id");
      error.statuscode = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function createpost(req, res, next) {
  try {
    const data = req.body;
    const responsemanager = await productsManager.creatOneProduct(data);
    return res
      .status(201)
      .json({ message: "Product Created", response: responsemanager });
  } catch (error) {
    return next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { pid } = req.params;
    const newData = req.body;
    const responseManager = await productsManager.update(pid, newData);
    if (!responseManager) {
      const error = new Error(`product whith id ${pid} not found`);
      error.statuscode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "Product Update", response: responseManager });
  } catch (error) {
    return next(error);
  }
}

async function deletedProduct(req, res, next) {
  try {
    const { pid } = req.params;
    const responseManagerDeleted = await productsManager.delete(pid);
    if (!responseManagerDeleted) {
      const error = new Error(` the id:${pid} doesn't exist`);
      error.statuscode = 404;
      throw error;
    }
    return res.status(200).json({ response: responseManagerDeleted });
  } catch (error) {
    return next(error);
  }
}

//controladores de vistas

async function showProducts(req, res, next) {
  try {
    let { category } = req.query;
    let all;

    if (!category) {
      all = await productsManager.readAllProducts();
    } else {
      all = await productsManager.readAllProducts(category);
    }

    if (all.length > 0) {
      return res.render("products", { products: all });
    } else {
      const error = new Error("Not found category");
      error.statuscode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function showProduct(req, res, next) {
  try {
    const { pid } = req.params;
    const responseId = await productsManager.readOneProduct(pid);
    if (responseId) {
      return res.render("product", { product:  responseId});
    } else {
      const error = new Error("Not found product Id");
      error.statuscode = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

export {
  getAllProducts,
  deletedProduct,
  updateProduct,
  createpost,
  getProduct,
  create,
  showProducts,
  showProduct,
};
