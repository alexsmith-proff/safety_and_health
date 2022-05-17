import React from 'react';
import Button from '../button/Button';

import s from './CreateTest.module.scss'

const CreateTest: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={s.top}>
                <div className={s.title}>Введите название теста</div>
                <Button>Все тесты</Button>
            </div>  
            <input type="text" className={s.input} />
            <Button>Создать тест</Button>

        </div>
    );
};

export default CreateTest;