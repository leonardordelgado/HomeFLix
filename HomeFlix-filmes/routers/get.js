import express from "express";
const router = express()

import exibeFilmes from "../models/exibeFilmes.js";
import {BarraDeBusca} from "../models/FilmesBusca.js"

router.get("/",(req,res)=>{
    exibeFilmes(req, res)
})
router.get("/video/:id",(req,res)=>{
BarraDeBusca(req,res)
})
export default router