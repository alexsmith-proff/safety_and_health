import React, { useEffect, useState } from 'react';
import Button from '../button/Button';

import s from './AddAnswerText.module.scss'

type AddAnswerTextProps = {
    isDisabled?: boolean, 
    addAnswer: (text: string) => void,
    reset: boolean
}

const AddAnswerText: React.FC<AddAnswerTextProps> = ({ isDisabled, addAnswer, reset }) => {
    const [text, setText] = useState<string>('')
    const [countAnswer, setCountAnswer] = useState<number>(1)

    function handlerChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
    }
    function addAnswerText() {
        addAnswer(text)
        setText('')
        setCountAnswer((prev) => prev + 1)
    }
    useEffect(() => {
        if(reset){
            setCountAnswer(1)
        }
    }, [reset])
    return (
        <div className={s.main}>
            <div className={s.title}>Введите ответ №{countAnswer}</div>
            <textarea className={s.textarea} name="textarea" onChange={handlerChange} value={text} disabled={isDisabled}/>
            <div className={s.btn}>
                <Button clickButton={addAnswerText} isDisabled={isDisabled}>Добавить ответ</Button>
            </div>
        </div>
    );
};

export default AddAnswerText;