import axios from 'axios';
import React, { useState } from 'react';
import AddAnswerText from '../../../../components/AddAnswerText/AddAnswerText';
import AddQuestionText from '../../../../components/AddQuestionText/AddQuestionText';
import SelectAnswer from '../../../../components/SelectAnswer/SelectAnswer';
import SideBar from '../../../../components/sidebar/SideBar';
import { ITest } from '../../../../interfaces/test';
import AdminLayout from '../../../../layouts/AdminLayout/AdminLayout';

import s from './NewQuestion.module.scss'

type NewQuestionPageProps = {
    tests: ITest[]
}

const NewQuestionPage: React.FC<NewQuestionPageProps> = ({ tests }) => {
    const [questionText, setQuestionText] = useState<string>('')
    return (
        <AdminLayout tests={tests}>
            <SideBar item={1} />
            <div className={s.sideContent}>
                <AddQuestionText />
                <div className={s.wrap}>
                    <AddAnswerText />
                    <SelectAnswer />
                </div>
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