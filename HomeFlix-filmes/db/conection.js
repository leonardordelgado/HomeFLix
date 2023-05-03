import {MongoClient} from 'mongodb';
import { UUID } from 'bson';

const url = "mongodb://api_HomeFlix:api_HomeFlix@localhost:3350/api_HomeFlix_Filmes"
const client = new MongoClient(url)


try{
    client.connect()
    console.log("Conexão realizada Com o mongoDB")
}
catch{
    (erro)=>{
        console.log("Existe um erro", erro)
    }
};



export default client;




