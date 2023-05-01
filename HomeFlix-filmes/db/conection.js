import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const DATABASE = process.env.DB_DATABASE;
const USER = process.env.DB_USER;
const HOST = process.env.DB_HOST;
const PASSSWORD = process.env.DB_PASSWORD;

export const db = new Sequelize(DATABASE,USER,PASSSWORD,{
  host:HOST,
  port:3350,
  dialect:"mysql"
});

export async function connect(){
  try{
    db.authenticate()
    console.log("conexão com o banco filmes realizada")
  }catch{
    (err)=> console.log("erro ao conectar", err)
  }
};
