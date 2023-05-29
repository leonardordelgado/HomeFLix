import Filmes from "../models/Filmes.js";
import { ObjectId } from "bson"
import { updateFilme } from "../validacoes/editaFilme.js";

class FilmesController{
    static listarFilmes = async (req, res, next)=>{
        try{
            const filmesResult = await Filmes.find()
            res.status(200).json(filmesResult)
        }catch (erro){
            next(erro)
        }
    }

    static findFilmeTitulo= async(req, res, next)=>{
        try{
            const filme = await Filmes.findOne({titulo:req.query.titulo})
            if(filme.length == 0){
                res.status(200).send({message: `${req.query.titulo} -titulo não existe`})
                
            }else{
                res.status(200).send(filme)
            }
        }catch (erro){
            next(erro)
        }
        

    }

    static deleteFilmes = async(req, res, next)=>{
        try{
            const filter = {_id: new ObjectId(`${req.params.id}`)}
            const find = await Filmes.findById(filter)
                if(find == null){
                    res.status(400).send({message:`Titulo não existe`,filme:req.params})
                }else{
                    Filmes.findByIdAndDelete(filter)
                    .then(res.status(200).send("Titulo Deletado com sucesso"))
                    .catch((err)=>{res.status(500).send({message:`${err.message} - titulo não pode ser deletado`})})
                }
        }catch (erro){
            next(erro)
        }
        
    }

    static insertFilmes = async (req, res, next)=>{
         try{
            const filmes = await Filmes.findOne({titulo: req.body.titulo})
            if(filmes == null){
                console.log(req.body)
                if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null || req.body.genero.length == 0){
                    res.status(500).send({message:"Informe um ou mais generos" })
                }else{
                    let addFilme = new Filmes(req.body)
                    const result = await addFilme.save()
                    res.status(201).send(result.toJSON()) 
                }
            }else{
                res.status(500).send({message:"Este titulo já existe no banco de dados",filme:filmes.toJSON() })
            }
         }catch (erro){
            next(erro)
         }
    }

    static updateFilme = async (req ,res, next)=>{
        try{
            updateFilme(req, res)
        }catch (erro){
            next(erro)
        }
    }

    static buscaPorGenero = async(req, res,next)=>{
        try{
            const filme = await Filmes.find({genero:req.query.genero})
            if(filme.length == 0){
                res.status(200).send(`Não existe titulos para o genero ${req.query.genero}`)
            }else{
                res.status(200).send(filme)
            }
        }catch (erro){
            next(erro)
        }

        
    }
}

export default FilmesController;