import cartsMongoManager from "../data/mongo/managers/cart.mongo.js";

async function createCartMongo(req, res, next) {
  try {
    const data = req.body;
    const response = await cartsMongoManager.create(data);
    return res.status(201).json({ message: "cart create", response: response._id });
  } catch (error) {
    return next(error);
  }
}

async function readAllCartMongo(req, res, next){
  try {
      const filter = req.query
      const response = await cartsMongoManager.readAll(filter)
      if (response.length > 0) {
          return res.status(200).json({ message: "CARTS READ", response });
      } else {
          const error = new Error("CARTS NOT FOUND");
          error.statusCode = 404;
          throw error;
      }
  } catch (error) {
      return next(error)
  }
}

async function readCartMongo(req, res, next) {
  try {
    const { cid } = req.params;
    const response = await cartsMongoManager.read(cid);
    return res.status(200).json({ message: "Cart Read", response });
  } catch (error) {
    return next(error);
  }
}

async function updateCartMongo(req, res, next) {
  try {
    const { cid } = req.params;
    const data = req.body;
    const response = await cartsMongoManager.update(cid, data);
    return res.status(200).json({ message: "Cart update", response });
  } catch (error) {
    return next(error);
  }
}

async function destroyCartMongo(req, res, next) {
  try {
    const { cid } = req.params;
    const response = await cartsMongoManager.destroy(cid);
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
