import { ObjectId } from "bson";
import client from "../db/conection.js";

const db = client.db("api_HomeFlix_Filmes")
const myColletionFilmes = db.collection("Filmes")


async function deletaFilme(req,res){
  const result = await  myColletionFilmes.deleteOne({_id: new ObjectId(`${req.params.id}`)})
    if(result.deletedCount == 1){
        res.send("Filme deletado da base de dados")
    }else{
        res.send(`Filme nao deletado Erro:Filme não existe na base de dados`)
    }
  
}
export default deletaFilme;