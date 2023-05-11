import mongoose from "mongoose";
import ErroBase from "../erros/ErrosBase.js";
import ReqIncorreta from "../erros/ReqIncorreta.js";
import ErroValidacao from "../erros/Errovalidacao.js";
import NaoExiste from "../erros/NaoExiste.js";


function manipuladordeerros(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        new ReqIncorreta().enviarResposta(res)
    }else if(erro instanceof mongoose.Error.ValidationError){
        new ErroValidacao(erro).enviarResposta(res)
    }else if(erro instanceof NaoExiste){
        erro.enviarResposta(res)
    }else{
       new ErroBase().enviarResposta(res);
    }
}
export default manipuladordeerros;