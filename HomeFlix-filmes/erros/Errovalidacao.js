import ReqIncorreta from "./ReqIncorreta.js";

class ErroValidacao extends ReqIncorreta{
    constructor(erro){
        const messageErro = Object.values(erro.errors)
        .map(erro=> erro.message)
        .join("; ");
        super(`Os seguintes erros foram encontrador ${messageErro}`)
    }
}
export default ErroValidacao