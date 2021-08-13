import { all } from "redux-saga/effects";
import empreendimentosSaga from "./Empreendimento/saga"

export default function* rootSaga() {
    yield all([
        empreendimentosSaga
    ]);
}