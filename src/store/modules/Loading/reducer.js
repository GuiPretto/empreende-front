import {
    START_REQUEST,
    FINISH_REQUEST
} from "../actionTypes";

const initialState = {
    loading: false
};

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FINISH_REQUEST:
            return {
                ...state,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
}
