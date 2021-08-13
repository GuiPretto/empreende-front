import {
    START_REQUEST,
    FINISH_REQUEST
} from "../actionTypes"

const startLoading = () => {
    return {
        type: START_REQUEST
    }
}

const finishLoading = () => {
    return {
        type: FINISH_REQUEST
    }
}

export {
    startLoading,
    finishLoading
}
