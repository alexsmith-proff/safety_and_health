import React from 'react';

import s from './button.module.scss'

interface ButtonProps {
    clickButton: () => void,
    dblClickButton?: () => void,
    isFixed?: boolean,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ clickButton, dblClickButton, isFixed, children }) => {
    return (
        <div>
            <button className={s.btn + ' ' + (isFixed ? s.fixed : '')} onClick={clickButton} onDoubleClick={dblClickButton}>{children}</button>
        </div>
    );
};

export default Button;