import User from "../models/user.model.js";

class UsersMongoManager {
    async create(data) {
      const one = await User.create(data)
      try {
      } catch (error) {
        throw error;
      }
    }
    async readAll() {
      try {
        const all = await User.find()
        return all
      } catch (error) {
        throw error;
      }
    }
    async read(uid) {
      try {
        const one = await User.findById(uid)
        return one
      } catch (error) {
        throw error;
      }
    }
    async update(uid, data) {
      try {
        const opts = {new:true}
        const one = await User.findByIdAndUpdate(uid,data,opts)
        return one
      } catch (error) {
        throw error;
      }
    }
    async destroy(uid) {
      try {
        const one = await User.findByIdAndDelete(uid)
        return one
      } catch (error) {
        throw error;
      }
    }
  }
  
  const usersMongoManager = new UsersMongoManager()
  export default usersMongoManager