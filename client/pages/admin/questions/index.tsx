import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ITest } from '../../../interfaces/test';

// import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../components/sidebar/SideBar';

import s from './AdminQuestions.module.scss'
import TestComboBox from '../../../components/TestComboBox/TestComboBox';
import AllQuestions from '../../../components/AllQuestions/AllQuestions';
import Button from '../../../components/button/Button';
import { useRouter } from 'next/router';
import { IQuestion } from '../../../interfaces/question';




interface AdminProps {
    tests: ITest[]
}

const AdminQuestionsAnswers: React.FC<AdminProps> = ({ tests }) => {
    const router = useRouter()
    const [testIndex, setTestIndex] = useState<number>(0)
    const [questions, setQuestions] = useState<IQuestion[]>([])

    function clickAddQuestion() {
        router.push('/admin/questions/newquestion')
    }

    function setTest(testIndex: number) {
        setTestIndex(testIndex)
    }

    useEffect(() => {
        if (tests.length > 0) {
            axios.get(process.env.SERVER_URL + '/api/questions/test/' + tests[testIndex]._id).then((res) => setQuestions(res.data))
        }
    }, [testIndex])

    return (
        <AdminLayout tests={tests}>
            <SideBar item={1} />

            <div className={s.sideContent}>
                <div className={s.wrap}>
                    <div className={s.comboBox}>
                        <TestComboBox tests={tests} setTest={setTest} />
                    </div>
                    <Button clickButton={clickAddQuestion}>Новый вопрос</Button>
                </div>
                <AllQuestions questions={questions} />
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

export default AdminQuestionsAnswers;