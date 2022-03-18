import axios from "axios";
import Coin from "./model/coin.js";

const url = `https://api.wazirx.com/api/v2/tickers`

const { data } = await axios.get(url)
const arr = new Array(data['btcinr'], data['xrpinr'], data['ethinr'], data['trxinr'], data['eosinr'], data['zilinr'], data['batinr'], data['zrxinr'], data['reqinr'], data['nulsinr'])

const DefaultData = async () => {
    try {
        await Coin.deleteMany({});
        await Coin.insertMany(arr);
        await console.log('Data inserted successfuly')
    } catch (error) {
        console.log(`Error while inserting data: ${error}`)
    }
    // console.log(arr)
}

export default DefaultData;