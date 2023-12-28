import mongoose, { Schema } from "mongoose";

const produkSchema = new Schema({
    nama_produk: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
}, {
    timestamps: false
});

const Produk = mongoose.model("Produk", produkSchema);

export default Produk;