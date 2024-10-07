import { Router } from "express";
import { showProducts, showProduct } from "../../controlers/products.controller.js";

const productsViewRouter = Router();

productsViewRouter.get("/", showProducts);
productsViewRouter.get("/:pid", showProduct)

export default productsViewRouter;
