import NaoExiste from "../erros/NaoExiste.js";

function manipulador404(req, res, next){
    const erro404 = new NaoExiste
    next(erro404)
}
export default manipulador404;