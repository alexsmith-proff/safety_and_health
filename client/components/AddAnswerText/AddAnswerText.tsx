import React from 'react';
import Button from '../button/Button';

import s from './AddAnswerText.module.scss'

const AddAnswerText: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Введите ответ №1</div>
            <textarea className={s.textarea} name="textarea"></textarea>
            <div className={s.btn}>
                <Button>Добавить ответ</Button>
            </div>
        </div>
    );
};

export default AddAnswerText;