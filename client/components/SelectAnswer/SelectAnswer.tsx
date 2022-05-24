import React from 'react';
import Button from '../button/Button';

import s from './SelectAnswer.module.scss'

const SelectAnswer: React.FC = () => {
    function createQuestion() {}
    return (
        <div className={s.main}>
            <ul className={s.list}>
                <li className={s.item}>
                    <input type="radio" id="1" name="group" className={s.item}/>
                    <label className={s.answersText} htmlFor="1">Ответ №1 верный</label>
                </li>
                <li className={s.item}>
                    <input type="radio" id="2" name="group" className={s.item}/>
                    <label className={s.answersText} htmlFor="2">Ответ №2 верный</label>
                </li>
                <li className={s.item}>
                    <input type="radio" id="3" name="group" className={s.item}/>
                    <label className={s.answersText} htmlFor="3">Ответ №3 верный</label>
                </li>
            </ul>
            <div className={s.btn}>
                <Button clickButton={createQuestion}>Создать вопрос</Button>
            </div>
        </div>
    );
};

export default SelectAnswer;