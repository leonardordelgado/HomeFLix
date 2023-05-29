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
app.use(bodyParser())

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain)

routes(app);
app.use(manipulador404);

app.use(manipuladordeerros);

app.listen(process.env.PORT_SERVER,
    ()=> console.log(`servidor rodando na porta ${process.env.PORT_SERVER}`)
);