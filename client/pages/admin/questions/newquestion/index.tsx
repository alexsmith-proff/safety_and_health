import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../../components/sidebar/SideBar';
import AddQuestionText from '../../../../components/AddQuestionText/AddQuestionText';
import AddAnswerText from '../../../../components/AddAnswerText/AddAnswerText';
import SelectAnswer from '../../../../components/SelectAnswer/SelectAnswer';
import TestComboBox from '../../../../components/TestComboBox/TestComboBox';

import { ITest } from '../../../../interfaces/test';
import { IQuestion } from '../../../../interfaces/question'

import s from './NewQuestion.module.scss'
import Button from '../../../../components/button/Button';
import { useRouter } from 'next/router';

type NewQuestionPageProps = {
    tests: ITest[]
}

const NewQuestionPage: React.FC<NewQuestionPageProps> = ({ tests }) => {
    const router = useRouter()
    const [testIndex, setTestIndex] = useState<number>(0)
    const initialQuestion = {
        _id: '',
        questionText: '',
        answers: [],
        test: tests[0] ? tests[testIndex]._id : null
    }
    const [question, setQuestion] = useState<IQuestion>(initialQuestion)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [reset, setReset] = useState<boolean>(false)

    function AllQuestions() {
        router.push('/admin/questions')
    }

    function isfixed(fix: boolean) {
        setIsDisabled(!fix)
    }

    function setTest(testIndex: number) {
        setTestIndex(testIndex)     
        setQuestion({...question, test: tests[testIndex]._id})   
    }

    function fixQuestionText(text: string) {
        setQuestion({ ...question, questionText: text })
        setIsDisabled(false)
    }
    function addAnswer(text: string) {
        setQuestion({ ...question, answers: [...question.answers, { answerText: text, answer: false }] })
    }
    function setAnswer(answerIndex: number) {
        setQuestion({
            ...question, answers: question.answers.map((el, index) => (
                index === (answerIndex - 1) ? { ...el, answer: true } : { ...el, answer: false }
            ))
        })
    }
    async function createQuestion() {
        await setReset(false)
        axios.post(process.env.SERVER_URL + '/api/questions/create', question)
        console.log('question', question);
        setQuestion(initialQuestion)
        setIsDisabled(true)
        setReset(true)
    }

    return (
        <AdminLayout tests={tests}>
            <SideBar item={1} />
            <div className={s.sideContent}>
                {
                    tests.length ?
                    <>
                        <div className={s.top}>
                            <TestComboBox tests={tests} setTest={setTest} />
                            <Button clickButton={AllQuestions}>Все вопросы</Button>
                        </div>

                        <AddQuestionText isFixed={isfixed} fixText={fixQuestionText} reset={reset} />
                        <div className={s.wrap}>
                            <AddAnswerText isDisabled={isDisabled} addAnswer={addAnswer} reset={reset} />
                            <SelectAnswer answersArr={question.answers} setAnswer={setAnswer} createQuestion={createQuestion} />
                        </div>
                    </>
                    :
                    <div>Нет тестов. Создайте хотя бы один тест</div>
                }
                {/* <div className={s.top}>
                    <TestComboBox tests={tests} />
                    <Button clickButton={AllQuestions}>Все вопросы</Button>
                </div>

                <AddQuestionText isFixed={isfixed} fixText={fixQuestionText} reset={reset} />
                <div className={s.wrap}>
                    <AddAnswerText isDisabled={isDisabled} addAnswer={addAnswer} reset={reset} />
                    <SelectAnswer answersArr={question.answers} setAnswer={setAnswer} createQuestion={createQuestion} />
                </div> */}
            </div>

        </AdminLayout>
    );
};

export async function getServerSideProps() {
    const tests = await axios.get(process.env.SERVER_URL + '/api/tests')
        .then(response => response.data)

    return {
        props: { tests }
    }
}

export default NewQuestionPage;