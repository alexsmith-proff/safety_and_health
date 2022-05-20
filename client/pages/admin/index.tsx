import axios from 'axios';
import React from 'react';
import SideBar from '../../components/sidebar/SideBar';

import { ITest } from '../../interfaces/test';


import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import NewTestBtn from '../../components/NewTestBtn/NewTestBtn';
import AllTest from '../../components/AllTest/AllTest';

import s from './admin.module.scss'

interface AdminProps {
    tests: ITest[]
}

const Admin: React.FC<AdminProps> = ({ tests }) => {

    return (
        <AdminLayout tests={tests}>
            <SideBar item={0} />

            <div className={s.sideContent}>
                <NewTestBtn />
                <AllTest />
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

export default Admin;