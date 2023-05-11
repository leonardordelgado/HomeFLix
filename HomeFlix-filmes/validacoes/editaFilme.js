import Filmes from "../models/Filmes.js"
import { ObjectId } from "bson"



 export async function updateFilme(req,res){
    const erros =[]
    if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null){
        erros.push({texto: "titulo inválido"})
    }
    if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null){
        erros.push({texto: "descricao inválida"})
    }
    if(!req.body.url || typeof req.body.url == undefined || req.body.url == null){
        erros.push({texto: "url inválido"})
    }
    if(!req.body.faixaetaria || typeof req.body.faixaetaria == undefined || req.body.faixaetaria == null|| req.body.faixaetaria == String){
        erros.push({texto: "faixaEtaria inválida"})
    }
    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null || req.body.genero.length == 0){
        erros.push({texto: "Informe um ou mais generos"})
    }
    
    console.log(req.body.genero)
        if(erros.length > 0){
            res.send(erros)
        }else{
            const filter = {_id: new ObjectId(`${req.params.id}`)}
            try{
                const result = await Filmes.findByIdAndUpdate(filter, {$set: req.body})
                res.status(200).send({message:'Titulo atualizado com sucesso',filme:result})
            }catch {(err)=>
            res.status(500).send({message:`${err.message}- o titulo não foi atualizado`})}
        
    }
}
