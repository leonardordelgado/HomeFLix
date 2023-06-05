import IFilmes from "@/interfaces/IFilmes";
import { InjectionKey } from "vue";
import { createStore, Store ,useStore as useVueStore} from "vuex";
import http from '@/http'
import {ALTERA_FILME, ADICIONAR_FILME, DELETAR_FILME, OBTEM_FILMES} from './actios'
import {  AVISO,  EXCLUIR_FILME, INCLUI_FILME, INFORME_ERROS, INFORME_SUCESSO, NOTIFICAR } from "./mutations";
import { INotificacao } from "@/interfaces/INotificacao";
import useNotificador from '@/hooks/notificador'
import { TipoNotificacao } from '@/interfaces/INotificacao';
import IErro from "@/interfaces/IErro";
import INotifica_sucesso from "@/interfaces/INotificaRsposta";
import IAviso from "@/interfaces/IAviso";
const {notificar} = useNotificador()
export interface Estado {
    filmes : IFilmes[],
    notificacoes: INotificacao[],
    erros: IErro[],
    sucessso: INotifica_sucesso[]
    aviso : IAviso[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        filmes: [],
        notificacoes: [],
        erros: [],
        sucessso: [],
        aviso: []
    },
    mutations:{
        [INCLUI_FILME](state, filme){
            if(filme.length >=1) {
               state.filmes = filme 
            }
            if(filme.status){
                state.filmes.push(filme.resposta)
            }  
        },
        
        [INFORME_ERROS](state, erro ){
            state.erros.push(erro)
            if(state.erros.length >0){notificar(TipoNotificacao.ATENCAO, `temos um erro em ${erro.name}`,
            `o erro foi causado por${erro.message} devido a URL esta incorreto`)}
        },
        [INFORME_SUCESSO](state, filme){
            state.sucessso.push(filme)
            if(state.sucessso.length >0){notificar(TipoNotificacao.SUCESSO, `Tudo certo`,
            `O filme ${filme.titulo} foi adicionado com sucesso`)}
        },
        [AVISO](state, aviso){
            state.aviso.push(aviso)
            if(state.aviso.length >0){notificar(TipoNotificacao.ATENCAO, `${aviso.name}`,
            `${aviso.message} `)}
        },

        [EXCLUIR_FILME](state, id: string){
            state.filmes = state.filmes.filter(fil => fil._id != id)
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)
            setTimeout(()=>{
                state.notificacoes = state.notificacoes.filter(Notificacao =>
                    Notificacao.id != novaNotificacao.id)
            },4000)
        }
    },

    actions:{
     async   [ADICIONAR_FILME]({commit}, filme){

            try{
              await  http.post('filmes', filme)
              .then((resposta)=>{
                commit(INCLUI_FILME, {resposta:resposta.data, status: resposta.request.statusText})})
              .then(()=>commit(INFORME_SUCESSO, filme))

                
            }catch (err){
                commit(INFORME_ERROS, err)
            }
                
        },

      async  [OBTEM_FILMES]({commit}, filtro: string){
                    let url = ""
                    if(filtro){
                         url = `filmes/${filtro}`
                    }else{
                         url = "filmes"
                    }
            try{
            await    http.get(url)
                        .then((resposta)=>{
                            commit(INCLUI_FILME, resposta.data)
                            
                        })
                         .catch((err)=>{
                            console.log(err)
                            if(err.response.status === 406){
                                notificar(TipoNotificacao.ATENCAO, `Ops Filme Não Encontrado`,
                                `O titulo ${err.response.data.message} `)
                            }else{
                                commit(AVISO, {name:'A lista esta vazia',message:'Você ainda nao tem filmes'})
                            }
                            
                        })
            }catch (err){
                commit(INFORME_ERROS, err)
            }    
        },

        [DELETAR_FILME]({commit}, id:string){
            http.delete(`filmes/${id}`)
            .then(()=> commit(EXCLUIR_FILME, id))
            .catch((erro)=>commit(INFORME_ERROS, erro))
        },
        [ALTERA_FILME]({commit}, filme):void{
            try{
                 http.put(`filmes/${filme.id}`, filme)
                .then((resposta)=> {
                    notificar(TipoNotificacao.SUCESSO, `Tudo certo`,
            `O filme ${filme.titulo} alterado com sucesso`)
                })
                }catch (err){
                    commit(INFORME_ERROS, err)
                } 
         }
    }
})
export function useStore():Store<Estado>{
    return useVueStore(key)
}