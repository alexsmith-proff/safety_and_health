import axios from 'axios';
import React from 'react';

import { ITest } from '../../../interfaces/test';

// import SideContent from '../../components/sidecontent/SideContent';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import SideBar from '../../../components/sidebar/SideBar';

import s from './AdminResults.module.scss'


interface AdminProps {
    tests: ITest[]
}

const AdminResults: React.FC<AdminProps> = ({ tests }) => {

    return (
        <AdminLayout tests={tests}>
            <SideBar item={2} />
            <div className={s.sideContent}>
                
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