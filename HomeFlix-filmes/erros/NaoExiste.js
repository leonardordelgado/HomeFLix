import ErroBase from "./ErrosBase.js"

class NaoExiste extends ErroBase{
    constructor(){
        super("Pagina não encontrada",404)
    }
}
export default NaoExiste;