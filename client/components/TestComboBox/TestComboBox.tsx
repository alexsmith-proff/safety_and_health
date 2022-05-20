import React from 'react';
import s from './TestComboBox.module.scss'

const TestComboBox: React.FC = () => {
    return (
        <div className={s.testComboBox}>
            <div className={s.title}>Тест</div>
            <div className={s.dropdown}>
                <select name="one" className={s.dropdownSelect}>
                    <option value=""></option>
                    <option value="1">Тест 1</option>
                    <option value="2">Тест 2</option>
                    <option value="3">Тест 3</option>
                </select>
            </div>


        </div>
    );
};

export default TestComboBox;