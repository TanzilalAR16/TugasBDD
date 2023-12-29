import mongoose from "mongoose";
import Biaya from "../models/biaya.js";

export const getAllBiaya = async (req, res, next) => {
    try {
        const result = await Biaya.find().sort({_id: -1});
        res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

export const createBiaya = async (req, res, next) => {
    const { id_transaksi, tanggal, nominal, pemasukan_pengeluaran } = req.body;
  
    try {
      const newBiaya = new Biaya({ id_transaksi, tanggal, nominal, pemasukan_pengeluaran });
      const result = await newBiaya.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const updateBiayaById = async (req, res, next) => {
    const { id_transaksi } = req.params;
    const { tanggal, nominal, pemasukan_pengeluaran } = req.body;
  
    try {
        const updatedBiaya = await Biaya.findOneAndUpdate(
            { id_transaksi },
            { tanggal, nominal, pemasukan_pengeluaran },
            { new: true }
        );

        if (!updatedBiaya) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        res.status(200).json(updatedBiaya);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBiayaById = async (req, res, next) => {
    const { id_transaksi } = req.params; // Ambil id_transaksi dari parameter URL
  
    try {
        const deletedBiaya = await Biaya.findOneAndDelete({ id_transaksi });

        if (!deletedBiaya) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        res.status(200).json({ message: "Data berhasil dihapus", deletedBiaya });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getBiayaById = async (req, res, next) => {
    const { id_transaksi } = req.params; // Ambil id_transaksi dari parameter URL
  
    try {
        const biaya = await Biaya.findOne({ id_transaksi });

        if (!biaya) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        res.status(200).json(biaya);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
