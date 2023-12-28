import Produk from "../models/produk.js";
import mongoose from "mongoose";


export const getallproduk = async (req, res, next) => {
  try {
    const result = await Produk.find().sort({_id: -1});
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduk = async (req, res, next) => {
  const { nama_produk, harga } = req.body;

  try {
    const newProduk = new Produk({ nama_produk, harga });
    const result = await newProduk.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}