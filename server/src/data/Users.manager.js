import fs from "fs";
import crypto from "crypto";

class UserManager {
  constructor(path) {
    this.path = path;
    this.exists();
  }

  exists() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    } else {
      console.log("file alredy exists");
    }
  }

  async readAllUsers(role) {
    try {
      const dataOfRead = await fs.promises.readFile(this.path, "utf-8");
      const parseDataOfRead = JSON.parse(dataOfRead);
      //sconsole.log(parseDataOfRead);
      if (role) {
        const filterData = parseDataOfRead.filter(
          (each) => each.role === role
        );
        return filterData;
      } else {
        return parseDataOfRead;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async readOneUser(id) {
    try {
      const all = await this.readAllUsers();
      const one = all.find((each) => each.id === id);
      return one;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async creatOneUser(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const allOneUser = await this.readAllUsers();
      allOneUser.push(data);
      const stringOneUser = JSON.stringify(allOneUser, null, 2);
      await fs.promises.writeFile(this.path, stringOneUser);
      return data.id;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, newData) {
    try {
      const all = await this.readAllUsers();
      const index = all.findIndex((user) => user.id === id);
      if (index === -1) {
        return null;
      }
      all[index] = { ...all[index], ...newData };
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return all[index];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const all = await this.readAllUsers();
      const filteredUsers = all.filter((user) => user.id !== id);
      if (all.length === filteredUsers.length) {
        return null;
      }
      const stringAll = JSON.stringify(filteredUsers, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return `User with id ${id} deleted`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const usersManager = new UserManager("./src/data/files/users.json");

export default usersManager;
