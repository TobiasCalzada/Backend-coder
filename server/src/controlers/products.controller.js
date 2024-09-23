import productsManager from "../data/products.manager.js";

async function getAllProducts(req, res, next) {
  try {
    let { category } = req.query;
    let responseOfProducts;

    if (!category) {
      responseOfProducts = await productsManager.readFileProducts();
    } else {
      responseOfProducts = await productsManager.readFileProducts(category);
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
    const { title, price, stock } = req.params;
    let { category } = req.query;
    if (!category) {
      category = "none";
    }
    const response = await productsManager.creatOneProduct({
      title,
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
    const responseId = await productsManager.read(pid);
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

export {
  getAllProducts,
  deletedProduct,
  updateProduct,
  createpost,
  getProduct,
  create,
};
