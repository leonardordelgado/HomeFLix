import express from "express";
const app = express()
import db from "./db/conection.js";
import Filmes from "./models/Filmes.js";
import routes from "./routers/index.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import manipuladordeerros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

dotenv.config();
app.use(express.json());

routes(app);
app.use(manipulador404);

app.use(manipuladordeerros);

app.listen(process.env.PORT_SERVER,
    ()=> console.log(`servidor rodando na porta ${process.env.PORT_SERVER}`)
);