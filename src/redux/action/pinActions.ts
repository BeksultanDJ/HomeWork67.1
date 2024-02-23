export const SET_PIN = 'SET_PIN';
export const CLEAR_PIN = 'CLEAR_PIN';

export const setPin = (digit: string) => {
    return { type: SET_PIN, payload: digit };
};

export const clearPin = () => {
    return { type: CLEAR_PIN };
};
