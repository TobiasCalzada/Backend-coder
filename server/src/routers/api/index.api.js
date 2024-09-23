import {Router} from "express"
import productsrouter from "./products.api.js"

const apiRouter = Router()

apiRouter.use("/products", productsrouter)
//apiRouter.use("/carts", cartsRouter)
//apiRouter.use("/users", usersRouter)

export default apiRouter