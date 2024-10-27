import Cart from "../models/cart.model.js";

class CartsMongoManager {
  async create(data) {
    const one = await Cart.create(data);
    try {
    } catch (error) {
      throw error;
    }
  }
  async readAll() {
    try {
      const all = await Product.find();
      return all;
    } catch (error) {
      throw error;
    }
  }
  async read(cid) {
    try {
      const one = await Product.findById(cid);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(cid, data) {
    try {
      const opts = { new: true };
      const one = await Product.findByIdAndUpdate(cid, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(cid) {
    try {
      const one = await Product.findByIdAndDelete(cid);
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const cartsMongoManager = new CartsMongoManager();
export default cartsMongoManager;
