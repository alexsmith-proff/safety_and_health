import React from 'react';
import Button from '../button/Button';
import s from './NewTestBtn.module.scss'

const NewTestBtn: React.FC = () => {
    return (
        <div className={s.main}>
            <Button>Новый тест</Button>            
        </div>
    );
};

export default NewTestBtn;