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
    if(!req.body.faixaetaria || typeof req.body.faixaetaria == undefined || req.body.faixaetaria == null){
        erros.push({texto: "faixaEtaria inválida"})
    }
    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null || req.body.faixaetaria == String){
        erros.push({texto: "genero inválido"})
    }

        if(erros.length > 0){
            res.send(erros)
        }else{
            const filmes = await Filmes.findOne({titulo: req.body.titulo})
        if(filmes == null){
            const filter = {_id: new ObjectId(`${req.params.id}`)}
            console.log(filter)
            
                Filmes.findByIdAndUpdate(filter, {$set: req.body}).then(
                    res.status(200).send({message:'Titulo atualizado com sucesso',filme:Filmes})
                )
               .catch ((err)=>
                res.status(500).send({message:`${err.message}- o titulo não foi atualizado`}))
            
            
        }else{
            res.send({erro:`O titulo informado ja esxite com os parametros`, filme:filmes})
        }
    
    
    }
}
