import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

const KeyboardSimulator = () => {
    const dispatch = useDispatch();
    const pin = useSelector((state: string) => state);

    const correctPin = '9999';
    const [accessGranted, setAccessGranted] = useState(false);
    const [showAccessMessage, setShowAccessMessage] = useState(false); // Добавлено состояние для отображения сообщения

    const handleButtonClick = (digit: string) => {
        dispatch(setPin(digit));
    };

    const handleEnter = () => {
        if (pin === correctPin) {
            setAccessGranted(true);
            setShowAccessMessage(true);
        } else {
            setAccessGranted(false);
            setShowAccessMessage(false);
        }
    };

    const handleClear = () => {
        dispatch(clearPin());
        setShowAccessMessage(false);
    };

    return (
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
    );
};

export default KeyboardSimulator