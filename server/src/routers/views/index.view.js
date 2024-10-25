import { Router } from "express";
import productsViewRouter from "./products.view.js";
import usersViewRouter from "./user.view.js";
import usersViewId from "./userId.view.js";
import usersViewLogin from "./usersLogin.view.js";
import adminP from "./adminP.view.js";

const viewRouter = Router();

viewRouter.use("/products", adminP);
viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);
viewRouter.use("/users", usersViewLogin);
viewRouter.use("/users", usersViewId);
viewRouter.get("/", (req, res, next) => {
  try {
    return res.render("index");
  } catch (error) {
    return next(error);
  }
});

export default viewRouter;
