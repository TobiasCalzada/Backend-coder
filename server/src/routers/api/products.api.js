import { Router } from "express";
import {getAllProducts,createpost,updateProduct,getProduct,deletedProduct,} from "../../controlers/products.controller.js";
import titleValid from "../../middlewares/middleProducts/titleValid.mid.js"
import validDataProducts from "../../middlewares/middleProducts/validDataProducts.mid.js";
const productsrouter = Router();

productsrouter.get("/", getAllProducts);
productsrouter.get("/:pid", getProduct);
productsrouter.post("/", titleValid, validDataProducts, createpost);
productsrouter.put("/:pid", updateProduct);
productsrouter.delete("/:pid", deletedProduct);

export default productsrouter;
