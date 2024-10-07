import {Router} from "express"
import apiRouter from "./api/index.api.js";
import viewRouter from "./views/index.view.js";


const router = Router()

router.use("/api", apiRouter)
router.use("/", viewRouter)

function inicioApi(req, res) {
    try {
      return res.status(200).json({
        message: "Coder Commerce API",
      });
    } catch (error) {
      const { message, statuscode } = error;
      return res
        .status(statuscode || 500)
        .json({ message: message || " Fatal Error" });
    }
  }

export default router