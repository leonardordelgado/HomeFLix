import Filmes from "../models/Filmes.js";
import {addfilme} from "../validacoes/addfilme.js";
import { updateFilme } from "../validacoes/editaFilme.js";
import { ObjectId } from "bson"

class FilmesController{
    static listarFilmes = async (req, res)=>{
        try{
            const filmesResult = await Filmes.find()
            res.status(200).json(filmesResult)
        }catch (err){
            res.status(500).json(err)
        }
    }

    static findFilmeTitulo= async(req, res)=>{
        const filme = await Filmes.findOne({titulo: req.params.titulo})
        if(filme == null){
            res.status(500).send({message: `${req.params.titulo} -titulo não existe`})
        }else{
            res.status(200).send(filme)
        }

    }

    static deleteFilmes = async(req, res)=>{
        const filter = {_id: new ObjectId(`${req.params.id}`)}
        const find = await Filmes.findById(filter)
        if(find == null){
            res.status(400).send({message:`Titulo não existe`,filme:req.params})
        }else{
            Filmes.findByIdAndDelete(filter)
            .then(res.status(200).send("Titulo Deletado com sucesso"))
            .catch((err)=>{res.status(500).send({message:`${err.message} - titulo não pode ser deletado`})})
        }
    }

    static insertFilmes = async (req, res)=>{
         addfilme(req, res)
    }

    static updateFilme = async (req ,res)=>{
        updateFilme(req, res)
    }

}

export default FilmesController;