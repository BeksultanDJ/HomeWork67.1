import { useDispatch, useSelector, Provider } from "react-redux";
import { useState } from "react";
import { setPin, clearPin } from "../redux/action/pinActions.ts";
import AccessMessage from "./AccessMessage.tsx";
import Keyboard from "./Keyboard.tsx";
import { store } from '../redux/store';

const KeyboardSimulator = () => {
    const dispatch = useDispatch();
    const pin = useSelector((state) => state.pin);

    const correctPin = '9999';
    const [accessGranted, setAccessGranted] = useState(false);
    const [showAccessMessage, setShowAccessMessage] = useState(false);

    const handleButtonClick = (digit: string) => {
        dispatch(setPin(digit));
    };

    const handleEnter = () => {
        if (pin !== undefined && pin === correctPin) {
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
        <Provider store={store}>
            <div>
                {accessGranted ? (
                    <AccessMessage message="Access Granted" color="green" />
                ) : pin !== undefined && pin.length === 4 && showAccessMessage ? (
                    <AccessMessage message="Access Denied" color="red" />
                ) : null}
                <div>
                    <div>Password: {pin !== undefined ? pin.replace(/./g, '*') : ''}</div>
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
