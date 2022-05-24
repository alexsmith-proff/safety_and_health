import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../button/Button';

import s from './CreateTest.module.scss'

const CreateTest: React.FC = () => {
    const router = useRouter()

    const [testName, setTestName] = useState<string>('')
    // alarm: 0 - неактивный; 1 - норма; 2 -авария
    const [alarmTextStatus, setAlarmTextStatus] = useState<number>(null)

    function onChangeTestName(e: React.ChangeEvent<HTMLInputElement>) {
        setTestName(e.target.value)
    }

    function clickAllTest() {
        router.push('/admin/tests')
    }

    function missingText() {
        setTimeout(() => {
            setAlarmTextStatus(null)
        }, 3000);
    }

    async function clickAddTest() {
        try {
            await axios.post(process.env.SERVER_URL + '/api/tests/create', {
                title: testName
            }).then((response => response.data))
            setTestName('')
            setAlarmTextStatus(1)
            missingText() // Скрывает текст

        } catch (error) {
            setAlarmTextStatus(2)
            // missingText() // Скрывает текст
        }
    }

    return (
        <div className={s.main}>
            <div className={s.top}>
                <div className={s.title}>Введите название теста</div>
                <Button clickButton={clickAllTest}>Все тесты</Button>
            </div>
            <input type="text" className={s.input} value={testName} onChange={onChangeTestName} />
            <div className={s.btnContainer}>
                <Button clickButton={clickAddTest}>Создать тест</Button>
                {
                   alarmTextStatus && 
                   <div className={s.alarmText + ' ' + (alarmTextStatus === 1 ? s.good : s.bad)}>{alarmTextStatus === 1 ? 'Тест создан' : 'Тест не создан' }</div>
                }
                
            </div>
        </div>
    );
};

export default CreateTest;