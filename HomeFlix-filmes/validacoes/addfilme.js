import {insetFilmes} from "../models/FilmesAdd.js"
import {consultaFilme} from "../models/FilmesBusca.js"


export async function addfilme(req, res){
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
                const AddFilme = {
                    titulo:req.body.titulo,
                    descricao:req.body.descricao,
                    url:req.body.url,
                    faixaEtaria:req.body.faixaEtaria,
                    genero:req.body.genero
                }
                try{
                    insetFilmes(AddFilme)
                    const Filme = await consultaFilme(req.body.titulo)
                    res.send(Filme)
                }catch{
                    (erro)=>res.send("erro ao adicionar",erro)
                }finally{
                        (erro)=> console.log(erro)
                }
            }else{
                res.send({erro:`O filme ja Existe com os Sequintes parametros`, filme:result})
            } 
        }
}
export default addfilme;