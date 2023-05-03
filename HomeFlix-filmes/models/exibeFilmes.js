import { ObjectId } from "bson";
import client from "../db/conection.js";

const db = client.db("api_HomeFlix_Filmes")
const myColletionFilmes = db.collection("Filmes")


async function exibeFilmes(req, res){
    const result = myColletionFilmes.find().project()
    const filmes =[]
     for await (const filme of result){
        filmes.push({filme})
     }
     res.send(filmes)
}
export default exibeFilmes;