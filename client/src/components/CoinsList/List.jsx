import React, { useState, useEffect } from 'react'
// import { fetchData } from '../../api/getCoinInfo';
import axios from 'axios';


const List = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchCoins();
    }, []);

    const fetchCoins = async () => {
        await axios.get(`https://hodl-info-clone.herokuapp.com/`).then(({ data }) => {
            console.log(data)
            setInfo(data)
        }).catch((error) => { console.log(error) })
    }

    return (
        // info?.length > 0 && info.map((coin) => (<p>{coin['name']}</p>))
        <table>
            <thead>
                <tr>
                    <th>
                        <h4>
                            <span>#</span>
                        </h4>
                    </th>
                    <th>
                        <h4>
                            <span>Name</span>
                        </h4>
                    </th>
                    <th>
                        <h4>
                            <span>Last</span>
                        </h4>
                    </th>
                    <th>
                        <h4>
                            <span>Buy / Sell Price</span>
                        </h4>
                    </th>
                    <th>
                        <h4>
                            <span>Volume</span>
                        </h4>
                    </th>
                    <th>
                        <h4>
                            <span>base_unit</span>
                        </h4>
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    info?.length > 0 && info.map((coin, i) => (
                        <tr>
                            <td>
                                <h4>{i + 1}</h4>
                            </td>
                            <td>
                                <h4>{coin.name}</h4>
                            </td>
                            <td>
                                <h4>₹ {coin.last}</h4>
                            </td>
                            <td>
                                <h4>₹ {coin.buy} / ₹ {coin.sell}</h4>
                            </td>
                            <td>
                                <h4>{coin.volume}</h4>
                            </td>
                            <td>
                                <h4>{coin.base_unit}</h4>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
}

export default List