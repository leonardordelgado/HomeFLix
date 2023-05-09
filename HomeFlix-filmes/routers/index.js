import express from "express";
import filmes from './filmesRoutes.js'

const routes = (app)=>{
    app.use(express.json(),
    filmes
    )
}
export default  routes;