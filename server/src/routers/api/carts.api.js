import { Router } from "express";
import { createCartMongo, destroyCartMongo, readAllCartMongo, readCartMongo, updateCartMongo } from "../../controlers/carts.controller.js";
const cartsRouter = Router();

cartsRouter.post("/", createCartMongo);
cartsRouter.get("/", readAllCartMongo)
cartsRouter.get("/:cid", readCartMongo)
cartsRouter.put("/:cid", updateCartMongo)
cartsRouter.delete("/:cid", destroyCartMongo)

export default cartsRouter;
