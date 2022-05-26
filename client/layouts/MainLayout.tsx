import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header/Header'
import { ITest } from '../interfaces/test';
import { getUserData } from '../redux/user/userSlice';
import { useAppDispatch } from '../redux/hooks';
import { HeaderPanel } from '../interfaces/enums';

interface MainLayoutProps{
    tests: ITest[],
    children: React.ReactNode
}

const MainLayout = ({ tests, children }: MainLayoutProps) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserData())
      }, [])
      
    return (
        <>
            <Head>
                <title>Охрана труда</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header tests={tests} />

            
            {children}

        </>
    );
};

export default MainLayout;