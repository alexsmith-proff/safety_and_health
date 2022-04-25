import React, { useState } from 'react'
import Image from 'next/image'

import st from './header.module.scss'

const Header:React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    function handleBurgerClick():void {
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
                        <div className={st.registerBtn + ' ' + st.btn}>Регистрация</div>
                        <div className={st.loginBtn + ' ' + st.btn}>Войти</div>
                    </div>
                </div>
                {/* <div className={st.menu}></div> */}

            </div>
        </div>
    )
}

export default Header