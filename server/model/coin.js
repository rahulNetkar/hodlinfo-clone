import mongoose from "mongoose";

const newSchema = mongoose.Schema({
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String
});

const Coin = mongoose.model('Coin', newSchema);

export default Coin;