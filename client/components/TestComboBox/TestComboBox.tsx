import React, { useState } from 'react';
import { ITest } from '../../interfaces/test';
import s from './TestComboBox.module.scss'

type TestComboBoxProps = {
    tests: ITest[],
    setTest?: (testIndex: number) => void

}

const TestComboBox: React.FC<TestComboBoxProps> = ({ tests, setTest }) => {
    const [testIndex, setTestIndex] = useState<number>(0)

    function handleChangeComboBox(e: React.ChangeEvent<HTMLSelectElement>) {
        setTestIndex(Number(e.target.value)) 
        setTest(Number(e.target.value))
    }
    return (
        <div className={s.testComboBox}>
            <div className={s.title}>Тест</div>
            <div className={s.dropdown}>
                <select name="one" className={s.dropdownSelect} onChange={handleChangeComboBox}>
                    {/* <option value=""></option> */}
                    {
                        // tests.map((item, index) => <option key={item._id} value={index} onChange={() => handleComboBoxClick(index)}>{item.title}</option>)
                        tests.map((item, index) => <option key={item._id} value={index}>{item.title}</option>)
                    }
                </select>
            </div>


        </div>
    );
};

export default TestComboBox;