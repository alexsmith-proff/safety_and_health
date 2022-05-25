import React from 'react';

import s from './button.module.scss'

interface ButtonProps {
    clickButton: () => void,
    dblClickButton?: () => void,
    isFixed?: boolean,
    isDisabled?: boolean,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ clickButton, dblClickButton, isFixed, isDisabled, children }) => {
    return (
        <div>
            <button className={s.btn + ' ' + (isFixed ? s.fixed : '') + (isDisabled ? s.noActive : '')} onClick={!isDisabled ? clickButton : null} onDoubleClick={dblClickButton}>{children}</button>
        </div>
    );
};

export default Button;