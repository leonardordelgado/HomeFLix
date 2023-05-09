import express from "express";
const app = express()
import db from "./db/conection.js";
import Filmes from "./models/Filmes.js";
import routes from "./routers/index.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();
app.use(express.json())

routes(app);


app.listen(process.env.PORT_SERVER,
    ()=> console.log(`servidor rodando na porta ${process.env.PORT_SERVER}`)
)