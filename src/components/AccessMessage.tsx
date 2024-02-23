import React from "react";

interface AccessMessageProps {
    message: string;
    color: string;
}

const AccessMessage: React.FC<AccessMessageProps> = ({ message, color }) => {
    return (
        <div style={{ color }}>
            <p>{message}</p>
        </div>
    );
};

export default AccessMessage