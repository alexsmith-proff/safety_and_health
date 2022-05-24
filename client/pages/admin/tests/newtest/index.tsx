import axios from 'axios';
import React from 'react';
import CreateTest from '../../../../components/CreateTest/CreateTest';
import SideBar from '../../../../components/sidebar/SideBar';
import { ITest } from '../../../../interfaces/test';
import AdminLayout from '../../../../layouts/AdminLayout/AdminLayout';
// import env from "@beam-australia/react-env"

import s from './NewTest.module.scss'

interface NewTestPageProps {
    tests: ITest[]
}

const NewTestPage: React.FC<NewTestPageProps> = ({ tests }) => {
    return (
        <AdminLayout tests={tests}>
            <SideBar item={0} />

            <div className={s.sideContent}>
                <CreateTest />
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

export default NewTestPage;