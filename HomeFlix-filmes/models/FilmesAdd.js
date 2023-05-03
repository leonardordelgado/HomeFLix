import client from "../db/conection.js";

const db = client.db("api_HomeFlix_Filmes")
const myColletionFilmes = db.collection("Filmes")


export async function insetFilmes(insert){
    await myColletionFilmes.insertOne(insert)
};


