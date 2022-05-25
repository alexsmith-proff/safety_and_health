import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../button/Button';

import s from './AddQuestionText.module.scss'

type AddQuestionTextProps = {
    isFixed: (isFixed: boolean) => void,
    fixText: (text: string) => void,
    reset: boolean
}

const AddQuestionText: React.FC<AddQuestionTextProps> = ({ isFixed, fixText, reset }) => {
    const router = useRouter()
    const [text, setText] = useState<string>('')
    const [isTextFixed, setIsTextFixed] = useState<boolean>(false)
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true)

    function changeText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        if (e.target.value) setIsDisabledBtn(false)
        else setIsDisabledBtn(true)
    }

    function fixQuestionText() {
        if (text) {
            setIsTextFixed(true)
            fixText(text)
            isFixed(true)
        }

    }
    function unFixQuestionText() {
        setIsTextFixed(false)
        isFixed(false)
    }
    useEffect(() => {
        if (reset) {
            setText('')
            setIsTextFixed(false)
            setIsDisabledBtn(true)
        }

    }, [reset])
    return (
        <div className={s.main}>
            <div className={s.title}>Введите название вопроса</div>
            <input type="text" className={s.input} value={text} onChange={changeText} disabled={isTextFixed} />
            <Button clickButton={fixQuestionText} dblClickButton={unFixQuestionText} isFixed={isTextFixed} isDisabled={isDisabledBtn}>Зафиксировать название вопроса</Button>
        </div>

    );
};

export default AddQuestionText;