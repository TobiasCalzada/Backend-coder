import {Router} from "express"
import productsrouter from "./products.api.js"
import usersRouter from "./users.api.js"
import cartsRouter from "./carts.api.js"

const apiRouter = Router()

apiRouter.use("/products", productsrouter)
apiRouter.use("/users", usersRouter)
apiRouter.use("/cart", cartsRouter)
//apiRouter.use("/carts", cartsRouter)

export default apiRouter