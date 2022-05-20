import React from 'react';
import Head from 'next/head';
import { ITest } from '../../interfaces/test';

import s from './AdminLayout.module.scss'
import Header from '../../components/header/Header';

interface MainLayoutProps {
    tests: ITest[],
    children: React.ReactNode
}

const AdminLayout = ({ tests, children }: MainLayoutProps) => {
    return (
        <>
            <Head>
                <title>Охрана труда</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>

            <Header tests={tests} />

            <div className="container">
                <div className={s.admin}>
                    <div className={s.adminWrap}>
                        {children}
                    </div>
                </div>

            </div>


        </>
    );
};

export default AdminLayout;