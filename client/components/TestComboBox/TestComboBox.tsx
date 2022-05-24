import React from 'react';
import { ITest } from '../../interfaces/test';
import s from './TestComboBox.module.scss'

type TestComboBoxProps = {
    tests: ITest[]
}

const TestComboBox: React.FC<TestComboBoxProps> = ({ tests }) => {
    return (
        <div className={s.testComboBox}>
            <div className={s.title}>Тест</div>
            <div className={s.dropdown}>
                <select name="one" className={s.dropdownSelect}>
                    <option value=""></option>
                    {
                        tests.map((item, index) => <option key={item._id} value={index}>{item.title}</option>)
                    }
                </select>
            </div>


        </div>
    );
};

export default TestComboBox;