import { Router } from "express";
import { viewIdUser } from "../../controlers/users.cotroller.js";

const usersViewId = Router();

usersViewId.get("/:userId", viewIdUser);

export default usersViewId;
