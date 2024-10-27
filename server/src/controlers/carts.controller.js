import cartsMongoManager from "../data/mongo/managers/cart.mongo.js";

async function createCartMongo(req, res, next) {
  try {
    const data = req.body;
    const response = await cartsMongoManager.create(data);
    return res.status(201).json({ message: "cart create", response });
  } catch (error) {
    return next(error);
  }
}

async function readAllCartMongo(req, res, next) {
  try {
    const response = await cartsMongoManager.readAll();
    return res.status(200).json({ message: "Carts Read", response });
  } catch (error) {
    return next(error);
  }
}

async function readCartMongo(req, res, next) {
  try {
    const { pid } = req.params;
    const response = await cartsMongoManager.read(pid);
    return res.status(200).json({ message: "Cart Read", response });
  } catch (error) {
    return next(error);
  }
}

async function updateCartMongo(req, res, next) {
  try {
    const { pid } = req.params;
    const data = req.body;
    const response = await cartsMongoManager.update(pid, data);
    return res.status(200).json({ message: "Cart update", response });
  } catch (error) {
    return next(error);
  }
}

async function destroyCartMongo(req, res, next) {
  try {
    const { pid } = req.params;
    const response = await cartsMongoManager.destroy(pid);
    return res.status(200).json({ message: "Cart deleted", response });
  } catch (error) {
    return next(error);
  }
}

export {
  createCartMongo,
  readAllCartMongo,
  readCartMongo,
  updateCartMongo,
  destroyCartMongo,
};
