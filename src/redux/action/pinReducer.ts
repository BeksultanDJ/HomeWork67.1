import { SET_PIN, CLEAR_PIN } from './pinActions';

const pinReducer = (state = '', action: any) => {
    switch (action.type) {
        case SET_PIN:
            return state.length < 4 ? state + action.payload : state;
        case CLEAR_PIN:
            return '';
        default:
            return state;
    }
};

export default pinReducer;
