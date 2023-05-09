import mongoose from "mongoose";

const Filme = new mongoose.Schema({
    id:{type: String},
    titulo:{type: String, required: true},
    descricao:{type: String, required:true},
    url:{type:String, required:true},
    faixaetaria:{type:Number ,required:true},
    genero:{type:Array, require:true}
})
const Filmes = mongoose.model('Filmes', Filme);

export default Filmes;