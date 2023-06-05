import express from "express";
import FilmesController from "../controllers.js/filmesControllers.js";
const router = express()

router
    .get("/filmes", FilmesController.listarFilmes)
    .get("/filmes/busca", FilmesController.buscaPorGenero)
    .get("/filmes/:titulo", FilmesController.findFilmeTitulo)
    .post("/filmes", FilmesController.insertFilmes)
    .put("/filmes/:id", FilmesController.updateFilme)
    .delete("/filmes/:id", FilmesController.deleteFilmes)

export default router;