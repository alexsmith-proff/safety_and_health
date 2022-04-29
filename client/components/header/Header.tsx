import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ITest } from '../../interfaces/test'

import st from './header.module.scss'


interface HeaderProps {
    tests: ITest[]
}

function Header({ tests }: HeaderProps) {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    function handleBurgerClick(): void {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={st.header}>
            <div className="container">
                <div className={st.headerContainer}>
                    <div className={st.burgerBtn + ' ' + (openMenu ? st.open : '')} onClick={handleBurgerClick}><span></span></div>
                    <div className={st.logoContainer}>
                        <div className={st.logo}>
                            <Image src="/logo.png" width={118} height={63} placeholder="empty" alt="logo" />
                        </div>
                        <div className={st.logoText}>Пульсар-телеком</div>
                    </div>
                    <div className={st.containerBtn}>
                        <div className={st.registerBtn + ' ' + st.btn} onClick={() => router.push('/register')}>Регистрация</div>
                        <div className={st.loginBtn + ' ' + st.btn} onClick={() => router.push('/login')}>Войти</div>
                    </div>
                </div>
                <div className={st.menu + ' ' + (openMenu ? st.open : '')}>
                    <ul className={st.menuList}>
                        {
                            tests.map((test, index) => {
                                return (
                                    <li className={st.menuItem} key={index} onClick={() => setOpenMenu(false)}>
                                        {/* <Link href={'http://localhost:3000/test/[id]'} as={'http://localhost:3000/test/' + test._id}> */}
                                        {/* <Link href='http://localhost:3000/test/[id]'> */}
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

