import axios from 'axios';
import React from 'react';

import { ITest } from '../../../interfaces/test';

import s from './AdminTests.module.scss'
// import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../components/sidebar/SideBar';
import NewTestBtn from '../../../components/NewTestBtn/NewTestBtn';
import AllTest from '../../../components/AllTest/AllTest';
import Link from 'next/link';

interface AdminProps {
    tests: ITest[]
}

const AdminTests: React.FC<AdminProps> = ({ tests }) => {
    return (
        <AdminLayout tests={tests}>
            <SideBar item={0} />

            <div className={s.sideContent}>
                <NewTestBtn link='/admin/tests/newtest' />
                <AllTest tests={tests} />
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

export default AdminTests;