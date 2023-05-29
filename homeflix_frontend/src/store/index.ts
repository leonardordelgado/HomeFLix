import IFilmes from "@/interfaces/IFilmes";
import { InjectionKey } from "vue";
import { createStore, Store ,useStore as useVueStore} from "vuex";
import http from '@/http'
import {ADICIONAR_FILME, DELETAR_FILME, OBTEM_FILMES} from './actios'
import { EXCLUIR_FILME, INCLUI_FILME } from "./mutations";
export interface Estado {
    filmes : IFilmes[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        filmes: [
            
        ]    
    },
    mutations:{
        [INCLUI_FILME](state, filme){
            state.filmes.push(filme)
                
        },
        [EXCLUIR_FILME](state, id: string){
            state.filmes = state.filmes.filter(fil => fil._id != id)
        }
    },

    actions:{
        [ADICIONAR_FILME]({commit}, filme){
                http.post('filmes', filme)
                    .then(()=>
                        commit(INCLUI_FILME, filme)
                )
        },

        [OBTEM_FILMES]({state}){
            http.get('filmes')
                .then(resposta => {
                    for(const filme of resposta.data){
                        state.filmes.push(filme)
                    }
                })
               
        },
        [DELETAR_FILME]({commit}, id:string){
            http.delete(`filmes/${id}`)
            .then(()=> commit(EXCLUIR_FILME, id))
        }
    }
})
export function useStore():Store<Estado>{
    return useVueStore(key)
}