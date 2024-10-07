import usersManager from "../data/Users.manager.js";

async function getAllUsers(req, res, next) {
  try {
    let { role } = req.query;
    let responseOfUsers;
    let  roleParse =  parseInt(role)

    if (!roleParse) {
      responseOfUsers = await usersManager.readAllUsers();
    } else {
      responseOfUsers = await usersManager.readAllUsers(roleParse);
    }
    

    if (responseOfUsers.length > 0) {
      return res
      .status(200)
      .json({ message: "Users read", responseOfUsers });
    } else {
      const error = new Error("Not found role");
      error.statuscode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function create(req, res, next) {
  try {
    let { photo, email, password, role, isOnline } = req.params;

    const response = await usersManager.creatOneUser({
      photo,
      email,
      password,
      role,
      isOnline
    });
    return res.status(201).json({ message: "User create", response });
  } catch (error) {
    return next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const { uid } = req.params;
    const responseId = await usersManager.readOneUser(uid);
    if (responseId) {
      return res.status(200).json({ message: "user id: ", responseId });
    } else {
      const error = new Error("Not found user Id");
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
    const responsemanager = await usersManager.creatOneUser(data);
    return res
      .status(201)
      .json({ message: "User Created", response: responsemanager });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { uid } = req.params;
    const newData = req.body;
    const responseManager = await usersManager.update(uid, newData);
    if (!responseManager) {
      const error = new Error(`user whith id ${pid} not found`);
      error.statuscode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "User Update", response: responseManager });
  } catch (error) {
    return next(error);
  }
}

async function deletedUser(req, res, next) {
  try {
    const { uid } = req.params;
    const responseManagerDeleted = await usersManager.delete(uid);
    if (!responseManagerDeleted) {
      const error = new Error(` the id:${uid} doesn't exist`);
      error.statuscode = 404;
      throw error;
    }
    return res.status(200).json({ response: responseManagerDeleted });
  } catch (error) {
    return next(error);
  }
}

async function registerView(req, res, next) {
  try {
    const users = await usersManager.readAllUsers()
    return res.render("register", {users})
  } catch (error) {
    return next(error)
  }
}

async function viewIdUser(req, res, next) {
  try {
    const {id} = req.query
    const user = await usersManager.readOneUser(id)
    return res.render("userId" , {user})
  } catch (error) {
    return next(error)
  }
}

export { getAllUsers, getUser, updateUser, createpost, deletedUser, create, registerView,viewIdUser };
