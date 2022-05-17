import React from 'react';

import st from './button.module.scss'

interface ButtonProps {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className={st.btn}>{children}</button>
        </div>
    );
};

export default Button;