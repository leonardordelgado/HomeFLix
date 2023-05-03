import express from "express";
const app = express()




import * as dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";

import router_get from "./routers/get.js"
import router_post from "./routers/post.js";


app.use(express.json())

app.use("/home", router_get);
app.use("/filme", router_post);

app.listen(process.env.PORT_SERVER,()=> console.log(`servidor rodando na porta ${process.env.PORT_SERVER}`))