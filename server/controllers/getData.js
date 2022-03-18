import Coin from "../model/coin.js";

export const getData = async (req, res) => {
    try {
        let data = await Coin.find({});

        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}