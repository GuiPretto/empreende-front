import { combineReducers } from "redux";
import { loadingReducer } from './Loading/reducer'
import { empreendimentoReducer } from './Empreendimento/reducer'

export default combineReducers({
    loadingReducer,
    empreendimentoReducer
});