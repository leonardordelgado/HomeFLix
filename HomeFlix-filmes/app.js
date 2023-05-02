import express from "express";
const app = express()

import {connect} from "./db/conection.js";
import Filmes from "./models/Filmes.js";
import Series from "./models/serie.js";
connect();

import * as dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";

import router_get from "./routers/get.js"
import router_post from "./routers/post.js";


app.use(express.json())

app.use("/", router_get);
app.use("/add", router_post);

app.listen(process.env.PORT_SERVER,()=> console.log(`servidor rodando na porta ${process.env.PORT_SERVER}`))