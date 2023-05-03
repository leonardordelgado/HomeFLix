import client from "../db/conection.js";

const db =  client.db("api_HomeFlix_Filmes")
const myColletionFilmes =  db.collection("Filmes")
import { ObjectId } from "bson";

export async function consultaFilme(name){
   return await myColletionFilmes.findOne({titulo: name})
}
export async function BarraDeBusca(req,res){
   const result = await myColletionFilmes.findOne({_id: new ObjectId(`${req.params.id}`)})
   res.send(result)
}

