import express from 'express'
import cors from 'cors'
import Connection from './components/db.js'
import DefaultData from './default.js'
import route from './routes/route.js'
import bodyParser from "body-parser";
import dotenv from 'dotenv';


const app = express();
app.use(cors());
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', route)


Connection();

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Server running on port ${Port}`))

DefaultData();