import express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//import mongodb, { MongoClient } from "mongodb";
import mongoose from "mongoose";
import biayaRouter from "./routes/biaya.js";
import userRouter from "./routes/user.js";

dotenv.config();
//const client = new MongoClient(process.env.MONGODB_URL)
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());
const port = process.env.PORT;
const secretKey = process.env.JWT_TOKEN;

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.use('/biaya', biayaRouter);
app.use('/user', userRouter);


mongoose.connect("mongodb+srv://tanzilal8:root@tugasbdd.plnite9.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
.catch((error) => console.log(error.message));