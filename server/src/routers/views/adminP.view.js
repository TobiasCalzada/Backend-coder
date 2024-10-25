import { Router } from "express";
import { adminPController } from "../../controlers/products.controller.js";

const adminP = Router();

adminP.get("/admin", adminPController);

export default adminP;
