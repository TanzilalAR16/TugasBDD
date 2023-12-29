import express from "express";
import { createBiaya, deleteBiayaById, getAllBiaya, getBiayaById, updateBiayaById } from "../controller/biaya.js";

const biayaRouter = express.Router();

biayaRouter.get("/", getAllBiaya);
biayaRouter.get("/:id_transaksi", getBiayaById);
biayaRouter.post("/", createBiaya);
biayaRouter.put("/:id_transaksi", updateBiayaById);
biayaRouter.delete("/:id_transaksi", deleteBiayaById);

export default biayaRouter;