import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ITest } from '../../../interfaces/test';

// import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../components/sidebar/SideBar';

import s from './AdminResults.module.scss'
import TestComboBox from '../../../components/TestComboBox/TestComboBox';
import AllResult from '../../../components/AllResult/AllResult';
import { IReasult } from '../../../interfaces/result';


interface AdminProps {
    tests: ITest[]
}

const AdminResults: React.FC<AdminProps> = ({ tests }) => {

    const [testIndex, setTestIndex] = useState<number>(0)
    const [results, setResuls] = useState<IReasult[]>([])

    function setTest(testIndex: number) {
        setTestIndex(testIndex)
    }

    useEffect(() => {
        if (tests.length > 0) {
            axios.get(process.env.SERVER_URL + '/api/results/test/' + tests[testIndex]._id).then((res) => setResuls(res.data))
        }
    }, [testIndex])

    return (
        <AdminLayout tests={tests}>
            <SideBar item={2} />
            <div className={s.sideContent}>
                <div className={s.comboBox}>
                    <TestComboBox tests={tests} setTest={setTest} />
                </div>
                {/* <div className={s.results}> */}
                    <AllResult results={results} />
                {/* </div> */}
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

export default AdminResults;