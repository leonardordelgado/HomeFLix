import Filmes from "../models/Filmes.js"

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
    if(!req.body.faixaetaria || typeof req.body.faixaetaria == undefined || req.body.faixaetaria == null || req.body.faixaetaria == String){
        erros.push({texto: "faixaEtaria inválida"})
    }
    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null){
        erros.push({texto: "genero inválido"})
    }
    if(erros.length > 0){
        res.status(500).send(erros)
    }else{
        const filmes = await Filmes.findOne({titulo: req.body.titulo})
        if(filmes == null){
            let addFilme = new Filmes(req.body)
            try{
                addFilme.save()
               const filme = await Filmes.findOne({titulo: req.body.titulo})
               res.status(201).send(filme.toJSON())
            }catch{(erro)=>
                res.status(500).send({message:`${erro} - Falha ao adicionar titulo`})
            }
            
        }else{
            res.status(500).send({message:"Este titulo já existe no banco de dados",filme:filmes .toJSON() })
        }
    
    }
}

