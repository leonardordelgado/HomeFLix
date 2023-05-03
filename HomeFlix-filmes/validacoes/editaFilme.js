import {consultaFilme} from "../models/FilmesBusca.js"
import updatefilme from "../models/editaFilme.js"


async function editaFilme(req,res){
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
    if(!req.body.faixaEtaria || typeof req.body.faixaEtaria == undefined || req.body.faixaEtaria == null){
        erros.push({texto: "faixaEtaria inválida"})
    }
    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null){
        erros.push({texto: "genero inválido"})
    }

        if(erros.length > 0){
            res.send(erros)
        }else{
            const result = await consultaFilme(req.body.titulo)          
            if(result == null){
                
                const update = {
                    $set:{
                        titulo:req.body.titulo,
                        descricao:req.body.descricao,
                        url:req.body.url,
                        faixaEtaria:req.body.faixaEtaria,
                        genero:req.body.genero
                    }
                }
                try{
                    updatefilme(req,update)
                    const Filme = await consultaFilme(req.body.titulo)
                    res.send(Filme)
                }catch{
                    (erro)=>res.send("erro ao atualizar filme",erro)
                }finally{
                        (erro)=> console.log(erro)
                }
            }else{
                res.send({erro:`O titulo informado ja esxite com os parametros`, filme:result}) 
            }
        }
}
export default editaFilme;
