import { Router } from "express";
import { registerView } from "../../controlers/users.cotroller.js";

const usersViewRouter = Router()

usersViewRouter.get("/register", registerView)

export default usersViewRouter;
