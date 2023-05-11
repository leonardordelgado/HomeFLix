import mongoose, { version } from "mongoose";

const Filme = new mongoose.Schema({
    id:{type: String},
    titulo:{
        type: String, 
        required: [true,"O titulo e obrigatorio"]
    },
    descricao:{
        type: String,
         required:[true,"A descrição e obrigatoria"]
    },
    url:{
        type:String, 
        required:[true,"A Url e obrigatoria"]
    },
    faixaetaria:{
        type:Number,
        required:[true,"A faixa etária e obrigatoria"],
        min:[2,"A faixa etária minima e de 2 anos"],
        max:[19,"A faixa etária maxima e de 18 anos"]
    },
    genero:{
        type:Array, 
        require:[true,"Informe um ou mais generos"]
    }
},
{
    versionKey:false
})
const Filmes = mongoose.model('Filmes', Filme);

export default Filmes;