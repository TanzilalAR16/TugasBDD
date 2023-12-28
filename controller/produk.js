import Produk from "../models/produk.js";
import mongoose from "mongoose";


export const getallproduk = async (req, res, next) =>{
        try {
            const allproduk = await Produk.find();
            res.status(200).json(allproduk);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        }