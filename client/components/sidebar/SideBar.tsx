import React from 'react';

import st from './sidebar.module.scss'

const SideBar = () => {
    return (
        <div className={st.sideBar}>
            <ul className={st.list}>
                <li className={st.item}>Тесты</li>
                <li className={st.item + ' ' + st.active}>Вопросы и ответы</li>
                <li className={st.item}>Результаты</li>
            </ul>
        </div>
    );
};

export default SideBar;