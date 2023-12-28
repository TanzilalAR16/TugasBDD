import express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongodb, { MongoClient } from "mongodb";
import mongoose from "mongoose";
import produkRouter from "./routes/produk.js";

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URL)
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/produk", produkRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});