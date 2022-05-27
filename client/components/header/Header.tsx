import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ITest } from '../../interfaces/test'

import st from './header.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setUserData } from '../../redux/user/userSlice'
import { HeaderPanel } from '../../interfaces/enums'

interface HeaderProps {
    tests: ITest[],
    panel?: HeaderPanel
}

const Header: React.FC<HeaderProps> = ({ tests, panel }) => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.user.user)

    const router = useRouter()
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    function handleBurgerClick(): void {
        setOpenMenu(!openMenu)
    }
    function handlerLogoutClick() {
        localStorage.removeItem('accessToken');
        dispatch(setUserData({}))
    }

    return (
        <div className={st.header}>
            <div className="container">
                <div className={st.headerContainer}>
                    <div className={st.burgerBtn + ' ' + (openMenu ? st.open : '')} onClick={handleBurgerClick}><span></span></div>

                    <div className={st.containerBtn}>
                        <div className={st.logoWrap}>
                            <div className={st.logoContainer}>
                                <Link href={'/'}>
                                    <a className={st.logo}>
                                        <Image src="/logo.png" width={118} height={63} placeholder="empty" alt="logo" />
                                    </a>
                                </Link>
                                <div className={st.logoText}>Пульсар-телеком</div>
                            </div>
                        </div>
                        {
                            panel !== HeaderPanel.admin
                                ?
                                <>
                                    {
                                        // Object.keys(userData).length
                                        (userData.role !== '') && (Object.keys(userData).length)
                                            ?
                                            <>
                                                <div className={st.name}>Здравствуйте, {userData.surname} {userData.name}</div>
                                                <div className={st.registerBtn + ' ' + st.btn} onClick={handlerLogoutClick}>Выйти</div>
                                            </>
                                            :
                                            <>
                                                <div className={st.registerBtn + ' ' + st.btn} onClick={() => router.push('/register')}>Регистрация</div>
                                                <div className={st.loginBtn + ' ' + st.btn} onClick={() => router.push('/login')}>Войти</div>
                                            </>
                                    }
                                </>
                                :
                                <>
                                </>
                        }
                    </div>
                </div>
                <div className={st.menu + ' ' + (openMenu ? st.open : '')}>
                    <div className={st.menutitle}>Тесты:</div>
                    <ul className={st.menuList}>
                        {
                            tests.map((test, index) => {
                                return (
                                    <li className={st.menuItem} key={index} onClick={() => setOpenMenu(false)}>
                                        <Link href={'/test/' + test._id}>
                                            <a>{test.title}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header

