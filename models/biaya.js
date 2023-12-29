import mongoose, { Schema } from "mongoose";

const biayaSchema = new Schema({
    id_transaksi:{
        type: Number,
        required: true
    },
    tanggal: {
        type: Date,
        required: true
    },
    nominal: {
        type: Number,
        required: true
    },
    pemasukan_pengeluaran: {
        type: String,
        required: true
    }
}, {
    timestamps: false
});

const Biaya = mongoose.model("Biaya", biayaSchema);

export default Biaya;
