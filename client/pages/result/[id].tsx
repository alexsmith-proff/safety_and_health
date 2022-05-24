import React from 'react';
import axios from 'axios'
import { ITest } from '../../interfaces/test';
import { IResultTest } from '../../interfaces/question'
import MainLayout from '../../layouts/MainLayout';

import st from './result.module.scss'

interface ResultProps {
    tests: ITest[],
    result: IResultTest
}

const Result: React.FC<ResultProps> = ({ tests, result }) => {

    return (
        <MainLayout tests={tests}>
            <div className={st.results} >
                <div className="container">
                    <div className={st.wrap}>
                        <h1 className={st.title}>Результаты теста</h1>
                        <h2 className={st.subtitle}>
                            {
                                result.countNoCorrectAnswer <= 2 ? 'Вы прошли тест' : 'Вы не прошли тест'
                            }
                            </h2>
                        <p className={st.textResults}>Правильные ответы - {result.countAllQuestions - result.countNoCorrectAnswer} / неправильные ответы - {result.countNoCorrectAnswer}</p>
                    </div>
                </div>
            </div>
        </MainLayout>


    );
};

export async function getServerSideProps({ query }) {
    const tests = await axios.get(process.env.SERVER_URL + '/api/tests')
        .then(response => response.data)

    const result = await axios.get(process.env.SERVER_URL + '/api/results' + query.id)
        .then(response => response.data)

    return {
        props: { tests, result }
    }
}

export default Result;