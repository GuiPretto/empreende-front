import { call, put, all, takeLatest } from "redux-saga/effects";
import { ServiceEmpreendimentos } from "../../../services/serviceEmpreendimentos";
import { finishLoading, startLoading } from "../Loading/action";
import {
    EMPREENDIMENTOS_DELETAR_REQUEST,
    EMPREENDIMENTOS_LIST_REQUEST, 
    EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST, 
    EMPREENDIMENTOS_SALVAR_REQUEST
} from "../actionTypes"
import {
    listSuccess,
    error,
    prepararEditarSuccess,
    salvarSuccess,
    deletarSuccess
} from './action'


function* getAllEmpreendimentos({filters}) {
    try {
        yield put(startLoading());

        //CHAMADA API
        const data = yield call(ServiceEmpreendimentos.getAllEmpreendimentos, filters)

        //CHAMADA SUCCESS
        yield put(listSuccess(data));

        yield put(finishLoading());
    } catch (e) {
        //ERROR
        yield put(error(e.message));
        yield put(finishLoading());
    }
}

function* getEmpreendimento({slug, id}) {
    try {
        yield put(startLoading());

        //CHAMADA API
        let data
        if (slug) {
            data = yield call(ServiceEmpreendimentos.getEmpreendimentoPorSlug, slug)
        } else {
            data = yield call(ServiceEmpreendimentos.getEmpreendimentoPorId, id)
        }

        //CHAMADA SUCCESS
        yield put(prepararEditarSuccess(data));

        yield put(finishLoading());
    } catch (e) {
        //ERROR
        yield put(error(e.message));
        yield put(finishLoading());
    }
}

function* saveEmpreendimento({data}) {
    try {
        yield put(startLoading());

        //CHAMADA API
        yield call(ServiceEmpreendimentos.saveEmpreendimento, data)
        
        //CHAMADA SUCCESS
        yield put(salvarSuccess(data.id));

        yield put(finishLoading());
    } catch (e) {
        //ERROR
        yield put(error(e.message));
        yield put(finishLoading());
    }
}

function* deleteEmpreendimento({id}) {
    try {
        yield put(startLoading());

        //CHAMADA API
        yield call(ServiceEmpreendimentos.deleteEmpreendimento, id)

        //CHAMADA SUCCESS
        yield put(deletarSuccess());

        yield put(finishLoading());
    } catch (e) {
        //ERROR
        yield put(error(e.message));
        yield put(finishLoading());
    }
}

export default all([
    takeLatest(EMPREENDIMENTOS_LIST_REQUEST, getAllEmpreendimentos),
    takeLatest(EMPREENDIMENTOS_PREPARAR_EDITAR_REQUEST, getEmpreendimento),
    takeLatest(EMPREENDIMENTOS_SALVAR_REQUEST, saveEmpreendimento),
    takeLatest(EMPREENDIMENTOS_DELETAR_REQUEST, deleteEmpreendimento),
]);