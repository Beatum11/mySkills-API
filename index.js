require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./routes/router');
const url = process.env.DATABASE_URL;

const app = express();
app.use(cors());
app.use('/api', router);
mongoose.set('strictQuery', false);



app.get('/', (req, res) => {
    res.send("Working");
});

const start = async () => {
    await mongoose.connect(url);

    app.listen('8000', (req, res) => {
        console.log("App is working on 8000");
    });
}

start();






