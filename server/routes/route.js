import express from "express";
import { getData } from "../controllers/getData.js";

const route = express.Router();

route.get('/', getData);

export default route;