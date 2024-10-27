import { Router } from "express";
import {getAllProducts,createpost,updateProduct,getProduct,deletedProduct,createProductMongo,readAllProductMongo,readProductMongo,updateProductMongo, destroyProductMongo} from "../../controlers/products.controller.js";
import titleValid from "../../middlewares/middleProducts/titleValid.mid.js"
import validDataProducts from "../../middlewares/middleProducts/validDataProducts.mid.js";
const productsrouter = Router();

//productsrouter.get("/", getAllProducts);
//productsrouter.get("/:pid", getProduct);
//productsrouter.post("/", titleValid, validDataProducts, createpost);
//productsrouter.put("/:pid", updateProduct);
//productsrouter.delete("/:pid", deletedProduct);
//mongo rutas
productsrouter.post("/", createProductMongo);
productsrouter.get("/", readAllProductMongo);
productsrouter.get("/:pid", readProductMongo);
productsrouter.put("/:pid", updateProductMongo);
productsrouter.delete("/:pid", destroyProductMongo);

export default productsrouter;
