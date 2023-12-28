import { Router } from "express";
import { getallproduk } from "../controller/produk.js";

const produkRouter = Router();

produkRouter.get("/", getallproduk)

export default produkRouter;