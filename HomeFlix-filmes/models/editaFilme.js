import { ObjectId } from "bson";
import client from "../db/conection.js";

const db = client.db("api_HomeFlix_Filmes")
const myColletionFilmes = db.collection("Filmes")

async function updatefilme(req, update){
 const filter = {_id: new ObjectId(`${req.params.id}`)}
 await myColletionFilmes.updateOne(filter, update)
  
}
export default updatefilme