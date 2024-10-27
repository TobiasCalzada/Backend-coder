import { Router } from "express";
import {getAllUsers,getUser,createpost,updateUser,deletedUser,createUserMongo,readAllUserMongo,readUserMongo,updateUserMongo,destroyUserMongo} from "../../controlers/users.cotroller.js";
import validDataUser from "../../middlewares/middleUsers/validDataUsers.mid.js";
import validPassEmail from "../../middlewares/middleUsers/passEmailvalid.mid.js";
const usersRouter = Router();

//usersRouter.get("/", getAllUsers);
//usersRouter.get("/:uid", getUser);
//usersRouter.post("/",validDataUser,validPassEmail, createpost);
//usersRouter.put("/:uid", updateUser);
//usersRouter.delete("/:uid", deletedUser);

//rutas con mongo
usersRouter.post("/", createUserMongo);
usersRouter.get("/", readAllUserMongo);
usersRouter.get("/:uid", readUserMongo);
usersRouter.put("/:uid", updateUserMongo)
usersRouter.delete("/:uid",destroyUserMongo )

export default usersRouter;
