import { Router } from "express";
import { viewUsersLogin } from "../../controlers/users.cotroller.js";

const usersViewLogin = Router();

usersViewLogin.get("/login", viewUsersLogin);

export default usersViewLogin;
