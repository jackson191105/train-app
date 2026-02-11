const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/trainDB");

const TrainSchema = new mongoose.Schema({
    name: String,
    from: String,
    to: String,
    seats: Number,
    price: Number
});

const Train = mongoose.model("Train", TrainSchema);

app.post("/search", async (req, res) => {
    const { from, to } = req.body;

    const trains = await Train.find({ from, to });
    res.json(trains);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
