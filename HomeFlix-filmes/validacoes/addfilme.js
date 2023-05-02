import Filmes from "../models/Filmes.js"

export async function addfilme(req, res){
    const erros =[]
    if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null){
        erros.push({texto: "Nome inválido"})
    }
    if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null){
        erros.push({texto: "Nome inválido"})
    }
    if(!req.body.url || typeof req.body.url == undefined || req.body.url == null){
        erros.push({texto: "Nome inválido"})
    }

        if(erros.length > 0){
            res.send(erros)
        }else{
            const filme = await Filmes.findOne({where:{titulo: req.body.titulo}})
               if(filme == null){
                    const AddFilme = {
                        titulo:req.body.titulo,
                        descricao:req.body.descricao,
                        url:req.body.url
                    }
                    try{
                        await Filmes.create(AddFilme)
                        const filmeadicionad = await Filmes.findAll({where:{titulo:req.body.titulo}})
                        res.send(JSON.stringify(filmeadicionad, null, 2))
                    }catch{
                        (erro)=>res.send("erro ao adicionar",erro)
                    }finally{
                        (erro)=> console.log(erro)
                    }
                }else{
                    res.send({erro:`O filme ja Existe com o id:${filme.dataValues.id}`})    
                }
        }
} 