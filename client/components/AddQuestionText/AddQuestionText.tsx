import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../button/Button';

import s from './AddQuestionText.module.scss'

const AddQuestionText: React.FC = () => {
    const router = useRouter()
    const [text, setText] = useState<string>('')
    const [isTextFixed, setIsTextFixed] = useState<boolean>(false)
    function changeText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)  
    }

    function AllQuesions() {
        router.push('/admin/questions')
    }
    function fixQuestionText() {
        setIsTextFixed(true)
    }
    function unFixQuestionText() {
        setIsTextFixed(false)
    }
    return (
        <div className={s.main}>
            <div className={s.top}>
                <div className={s.title}>Введите название вопроса</div>
                <Button clickButton={AllQuesions}>Все вопросы</Button>
            </div>
            <input type="text" className={s.input} value={text} onChange={changeText} disabled={isTextFixed}/>
            <Button clickButton={fixQuestionText} dblClickButton={unFixQuestionText} isFixed={isTextFixed}>Зафиксировать название вопроса</Button>
        </div>
        
    );
};

export default AddQuestionText;