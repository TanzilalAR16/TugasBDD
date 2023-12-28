import { Router } from "express";
import  express  from "express";
import { createProduk, getallproduk } from "../controller/produk.js";

const produkRouter = express.Router();

produkRouter.get("/", getallproduk);
produkRouter.post("/", createProduk);

export default produkRouter;