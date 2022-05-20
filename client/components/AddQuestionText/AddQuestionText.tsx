import React from 'react';
import Button from '../button/Button';

import s from './AddQuestionText.module.scss'

const AddQuestionText: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={s.top}>
                <div className={s.title}>Введите название вопроса</div>
                <Button>Все вопросы</Button>
            </div>
            <input type="text" className={s.input} />
            <Button>Зафиксировать название вопроса</Button>
        </div>
        
    );
};

export default AddQuestionText;