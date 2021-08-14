import { newNotification } from "../../../components/Notification"
import { 
    EMPREENDIMENTOS_DELETAR_REQUEST,
    EMPREENDIMENTOS_DELETAR_SUCCESS,
    EMPREENDIMENTOS_ERROR, 
    EMPREENDIMENTOS_LIST_REQUEST, 
    EMPREENDIMENTOS_LIST_SUCCESS, 
    EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST,
    EMPREENDIMENTOS_PREPARAR_EDITAR_SUCCESS,
    EMPREENDIMENTOS_PREPARAR_NOVO_REQUEST,
    EMPREENDIMENTOS_PREPARAR_NOVO_SUCCESS,
    EMPREENDIMENTOS_SALVAR_REQUEST,
    EMPREENDIMENTOS_SALVAR_SUCCESS
} from "../actionTypes"

const initialState = {
    empreendimentos: [],
    empreendimentoAtual: null,
    error: ""
}

export const empreendimentoReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPREENDIMENTOS_PREPARAR_NOVO_REQUEST:
            return {
                ...state,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_PREPARAR_NOVO_SUCCESS:
            return {
                ...state,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_SALVAR_REQUEST:
            return {
                ...state,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_SALVAR_SUCCESS:
            if (action.id) {
                newNotification('Empreendimento atualizado com sucesso!', {type: 'SUCCESS'})
            } else {
                newNotification('Empreendimento salvo com sucesso!', {type: 'SUCCESS'})
            }
            return {
                ...state,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST:
            return {
                ...state,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_PREPARAR_EDITAR_SUCCESS:
            return {
                ...state,
                empreendimentoAtual: action.data.data
            }
        case EMPREENDIMENTOS_LIST_REQUEST:
            return {
                ...state,
                empreendimentos: [],
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_LIST_SUCCESS:
            return {
                ...state,
                empreendimentos: action.data.data,
                empreendimentoAtual: null
            }
        case EMPREENDIMENTOS_ERROR:
            newNotification(action.error.mensagem, {type: 'ERROR'})
            return {
                ...state,
                error: action.error
            }
        case EMPREENDIMENTOS_DELETAR_SUCCESS:
            newNotification('Empreendimento removido com sucesso!', {type: 'SUCCESS'})
            return {
                ...state,
                empreendimentoAtual: null
            }
        
        case EMPREENDIMENTOS_DELETAR_REQUEST:
        default:
            return {
                ...state
            }
    }
}