import axios from 'axios';
import React from 'react';

import { ITest } from '../../../interfaces/test';

// import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../components/sidebar/SideBar';

import s from './AdminQuestions.module.scss'
import TestComboBox from '../../../components/TestComboBox/TestComboBox';
import AllQuestions from '../../../components/AllQuestions/AllQuestions';
import Button from '../../../components/button/Button';




interface AdminProps {
    tests: ITest[]
}

const AdminQuestionsAnswers: React.FC<AdminProps> = ({ tests }) => {

    return (
        <AdminLayout tests={tests}>
            <SideBar item={1} />

            <div className={s.sideContent}>
                <div className={s.wrap}>
                    <div className={s.comboBox}>
                        <TestComboBox />
                    </div>
                    <Button>Новый вопрос</Button>
                </div>
                <AllQuestions />
            </div>
        </AdminLayout>
    );
};

export async function getServerSideProps() {
    const tests = await axios.get('http://localhost:5000/api/tests')
        .then(response => response.data)

    return {
        props: { tests }
    }
}

export default AdminQuestionsAnswers;