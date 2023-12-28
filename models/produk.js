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
    timestamps: false,
    collection: "produk"
});

const Produk = mongoose.model("produk", produkSchema);

export default Produk;
