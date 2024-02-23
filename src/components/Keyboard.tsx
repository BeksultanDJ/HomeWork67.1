import React from "react";

interface KeyboardProps {
    onButtonClick: (digit: string) => void;
    onClear: () => void;
    onEnter: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onButtonClick, onClear, onEnter }) => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className="keyboard">
            {digits.map((digit) => (
                <button className="btns" key={digit} onClick={() => onButtonClick(digit.toString())}>
                    {digit}
                </button>
            ))}
            <button className="btns" onClick={onClear}>{"<"}</button>
            <button className="btns" onClick={onEnter}>E</button>
        </div>
    );
};

export default Keyboard;