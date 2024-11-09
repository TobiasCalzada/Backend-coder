import { Types } from "mongoose";
import mongoose from "mongoose";

class MongoManager {
  constructor(model) {
    this.model = model
  }
  create = async (data) => {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readAll = async (filter) => {
    try {
      const all = await this.model.find(filter).lean()
      return all;
    } catch (error) {
      throw error;
    }
  };

  read = async (id) => {
    try {
      const one = await this.model.findOne({ _id: id }).lean();
      return one;
    } catch (error) {
      throw error;
    }
  };
  
  
  update = async (id, data) => {
    try {
      const opts = { new: true };
      const one = await this.model.findOneAndUpdate({ _id: id }, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroy = async (id) => {
    try {
      const one = await this.model.findOneAndDelete({ _id: id });
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default MongoManager