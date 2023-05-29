import mongoose from 'mongoose'


const url = "mongodb://api_HomeFlix:api_HomeFlix@localhost:30002/api_HomeFlix_Filmes"

try{
    mongoose.connect(url)
    console.log("conexão com o banco feita com sucesso")
}
catch{
    (erro)=>{
        console.log("Existe um erro", erro)
    }
};
let db = mongoose.Connection;



export default db;




