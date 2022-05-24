import { useRouter } from 'next/router';
import React from 'react';
import Button from '../button/Button';
import s from './NewTestBtn.module.scss'

type NewTestBtnProps = {
    link: string
}

const NewTestBtn: React.FC<NewTestBtnProps> = ({ link }) => {
    const router = useRouter()
    function handleClick() {
        router.push(link)
    }
    return (
        <div className={s.main}>
            <Button clickButton={handleClick}>Новый тест</Button>            
        </div>
    );
};

export default NewTestBtn;