import axios from 'axios';
import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import MainLayout from '../../layouts/MainLayout';

import { ITest } from '../../interfaces/test';

import st from './admin.module.scss'
import SideContent from '../../components/sidecontent/SideContent';

interface AdminProps {
    tests: ITest[]
}

const Admin: React.FC<AdminProps> = ({ tests }) => {
    return (
        <MainLayout tests={tests}>
            <div className="container">
                <div className={st.admin}>
                    <div className={st.adminWrap}>
                        <SideBar />
                        <SideContent />
                    </div>
                </div>

            </div>
        </MainLayout>
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