import { Router } from "express";
import {getAllUsers,getUser,createpost,updateUser,deletedUser} from "../../controlers/users.cotroller.js";
import validDataUser from "../../middlewares/middleUsers/validDataUsers.mid.js";
import validPassEmail from "../../middlewares/middleUsers/passEmailvalid.mid.js";
const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:uid", getUser);
usersRouter.post("/",validDataUser,validPassEmail, createpost);
usersRouter.put("/:uid", updateUser);
usersRouter.delete("/:uid", deletedUser);

export default usersRouter;
