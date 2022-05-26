import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ITest } from '../../interfaces/test';

import s from './AdminLayout.module.scss'
import Header from '../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IUser } from '../../interfaces/user';
import { useRouter } from 'next/router';
import { getUserData } from '../../redux/user/userSlice';
import { HeaderPanel } from '../../interfaces/enums';

interface MainLayoutProps {
    tests: ITest[],
    children: React.ReactNode
}

const AdminLayout = ({ tests, children }: MainLayoutProps) => {
    const dispatch = useAppDispatch()
    const user: IUser = useAppSelector(state => state.user.user)

    const router = useRouter()

    const [isVisiblePage, setIsVisiblePage] = useState<boolean>(false)

    useEffect(() => {
        console.log('eff[1]');
        dispatch(getUserData())
        console.log('eff[2]');
    }, [])

    useEffect(() => {
        console.log('eff[user1]');
            if (!Object.keys(user).length) {
                console.log('!Object.keys(user).length');
            } else {
                if (user.role !== 'admin') {
                    console.log('user.role');
                    router.push('/login')
                } else {
                    console.log('setIsVisiblePage(true)');
                    setIsVisiblePage(true)
                }
            }
        console.log('eff[user2]');
    }, [user])
    

    return (
        <>
            {
                isVisiblePage &&
                <>
                    <Head>
                        <title>Охрана труда</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"></link>
                    </Head>

                    <Header tests={tests} panel={HeaderPanel.admin} />

                    <div className="container">
                        <div className={s.admin}>
                            <div className={s.adminWrap}>
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default AdminLayout;