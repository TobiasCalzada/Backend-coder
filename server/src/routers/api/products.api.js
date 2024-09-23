import {Router} from "express";
import {getAllProducts,createpost,updateProduct,getProduct,deletedProduct} from "../../controlers/products.controller.js"
import isValidData from "../../middlewares/isValidData.mid.js";
const productsrouter = Router()

productsrouter.get("/", getAllProducts);
productsrouter.post("/",isValidData, createpost);
productsrouter.put("/:pid", updateProduct);
productsrouter.get("/:pid", getProduct);
productsrouter.delete("/:pid", deletedProduct);

export default productsrouter