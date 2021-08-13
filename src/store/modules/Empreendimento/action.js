import { 
    EMPREENDIMENTOS_LIST_REQUEST, 
    EMPREENDIMENTOS_LIST_SUCCESS,
    EMPREENDIMENTOS_ERROR,
    EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST,
    EMPREENDIMENTOS_PREPARAR_EDITAR_SUCCESS,
    EMPREENDIMENTOS_SALVAR_REQUEST,
    EMPREENDIMENTOS_SALVAR_SUCCESS,
    EMPREENDIMENTOS_DELETAR_REQUEST,
    EMPREENDIMENTOS_DELETAR_SUCCESS,
    EMPREENDIMENTOS_PREPARAR_NOVO_SUCCESS,
    EMPREENDIMENTOS_PREPARAR_NOVO_REQUEST, 
} from "../actionTypes"
import { slugify } from '../../../components/utils'
import { newNotification } from "../../../components/Notification"

const prepararNovoRequest = (id) => {
    return {
        type: EMPREENDIMENTOS_PREPARAR_NOVO_REQUEST,
        id
    }
}

const prepararNovoSuccess = (id) => {
    return {
        type: EMPREENDIMENTOS_PREPARAR_NOVO_SUCCESS,
    }
}

const deletarRequest = (id) => {
    return {
        type: EMPREENDIMENTOS_DELETAR_REQUEST,
        id
    }
}

const deletarSuccess = () => {
    return {
        type: EMPREENDIMENTOS_DELETAR_SUCCESS,
    }
}

const salvarRequest = (data) => {
    const contato = typeof data.contato === 'number' ? data.contato : parseInt(data.contato.replace(/\D+/g, ''))
    const dataAjustada = {
        id: data?.id,
        nome: data.nome,
        slug: slugify(data.nome),
        contato: contato,
        quartos: data.quartos,
        vagas: data.vagas,
        area: data.area,
        endereco: data.endereco
    }
    return {
        type: EMPREENDIMENTOS_SALVAR_REQUEST,
        data: dataAjustada
    }
}

const salvarSuccess = (id) => {
    return {
        type: EMPREENDIMENTOS_SALVAR_SUCCESS,
        id
    }
}

const prepararEditarRequest = (value, type) => {
    if (type === "SLUG") {
        return {
            type: EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST,
            slug: value
        }
    } else {
        return {
            type: EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST,
            id: value
        }
    }
}

const prepararEditarSuccess = (data) => {
    return {
        type: EMPREENDIMENTOS_PREPARAR_EDITAR_SUCCESS,
        data
    }
}

const listRequest = (filters) => {
    return {
        type: EMPREENDIMENTOS_LIST_REQUEST,
        filters
    }
}

const listSuccess = (data) => {
    return {
        type: EMPREENDIMENTOS_LIST_SUCCESS,
        data
    }
}

const error = (error) => {
    return {
        type: EMPREENDIMENTOS_ERROR,
        error
    }
}

export {
    prepararNovoRequest,
    prepararNovoSuccess,
    deletarRequest,
    deletarSuccess,
    salvarRequest,
    salvarSuccess,
    prepararEditarRequest,
    prepararEditarSuccess,
    listRequest,
    listSuccess,
    error,
}