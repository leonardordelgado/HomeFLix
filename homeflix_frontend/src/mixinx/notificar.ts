import { TipoNotificacao } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/mutations";

export const notificacaoMixin = {
    methods: { notificar( tipo: TipoNotificacao, titulo: string, texto: string): void{
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }}
}