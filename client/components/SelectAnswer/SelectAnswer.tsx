import React, { useEffect, useState } from 'react';
import Button from '../button/Button';

import s from './SelectAnswer.module.scss'

type SelectAnswerProps = {
    answersArr: any[],
    setAnswer: (index: number) => void
    createQuestion: () => void
}

const SelectAnswer: React.FC<SelectAnswerProps> = ({ answersArr, setAnswer, createQuestion }) => {
    // Создаем пустой массив
    // const AnswersArr = new Array(countAnswer).fill(null)


    const [radioBtnClicked, setRadioBtnClicked] = useState<boolean>(false)
    const [radioBtnIndex, setRadioBtnIndex] = useState<number>(0)
    const [notSelectAnswer, setNotSelectAnswer] = useState<boolean>(false)

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const handleRadioBtnClick = (index: number) => {
        setRadioBtnClicked(true)
        setRadioBtnIndex(index)
        setNotSelectAnswer(false)

        setAnswer(index)
      }

    function clickInput() {}

    
    function handlerCreateQuestion() {
        createQuestion()
    }
    useEffect(() => {
        if (answersArr.length > 1) setIsDisabled(false)
        else setIsDisabled(true)
    }, [answersArr])
    return (
        <div className={s.main}>
            <ul className={s.list}>
                {
                    answersArr.map((item, index) => (
                        <li className={s.item} key={index}>
                            <input type="radio" id="1" name="group" className={s.input} value={index} onClick={() => handleRadioBtnClick(index + 1)}/>
                            <label className={s.answersText} htmlFor="1" onClick={() => handleRadioBtnClick(index + 1)}>Ответ №{index + 1} верный</label>
                        </li>
                    ))
                }
            </ul>
            <div className={s.btn}>
                <Button clickButton={handlerCreateQuestion} isDisabled={isDisabled}>Создать вопрос</Button>
            </div>
        </div>
    );
};

export default SelectAnswer;