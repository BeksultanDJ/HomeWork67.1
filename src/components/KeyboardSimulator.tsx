import { useDispatch, useSelector, Provider } from "react-redux";
import { useState } from "react";
import { createStore } from "redux";
import AccessMessage from "./AccessMessage.tsx";
import Keyboard from "./Keyboard.tsx";

const SET_PIN = 'SET_PIN';
const CLEAR_PIN = 'CLEAR_PIN';

const setPin = (digit: string) => {
    return { type: SET_PIN, payload: digit };
};

const clearPin = () => {
    return { type: CLEAR_PIN };
};

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

const store = createStore(pinReducer);

const KeyboardSimulator = () => {
    const dispatch = useDispatch();
    const pin = useSelector((state: string) => state);

    const correctPin = '9999';
    const [accessGranted, setAccessGranted] = useState(false);
    const [showAccessMessage, setShowAccessMessage] = useState(false);

    const handleButtonClick = (digit: string) => {
        dispatch(setPin(digit));
    };

    const handleEnter = () => {
        if (pin === correctPin) {
            setAccessGranted(true);
            setShowAccessMessage(true);
        } else {
            setAccessGranted(false);
            setShowAccessMessage(true);
        }
    };

    const handleClear = () => {
        dispatch(clearPin());
        setShowAccessMessage(false);
    };

    return (
        <Provider store={store}> {/* Provide the store to the application */}
            <div>
                {accessGranted ? (
                    <AccessMessage message="Access Granted" color="green" />
                ) : pin.length === 4 && showAccessMessage ? (
                    <AccessMessage message="Access Denied" color="red" />
                ) : null}
                <div>
                    <div>Password: {pin.replace(/./g, '*')}</div>
                    <Keyboard
                        onButtonClick={handleButtonClick}
                        onClear={handleClear}
                        onEnter={handleEnter}
                    />
                </div>
            </div>
        </Provider>
    );
};

export default KeyboardSimulator;
