import Link from 'next/link';
import React from 'react';

import st from './sidebar.module.scss'

interface SideBarProps {
    item: number,
}
const sideBarArr = [
    {
        url: '/admin/tests',
        text: 'Тесты'
    },
    {
        url: '/admin/questions',
        text: 'Вопросы и ответы'
    },
    {
        url: '/admin/results',
        text: 'Результаты'
    }
]

const SideBar: React.FC<SideBarProps> = ({ item }) => {
    return (
        <div className={st.sideBar}>
            <ul className={st.list}>
                {
                    sideBarArr.map((i, index) => 
                    <li className={index==item ? (st.item + ' ' + st.active) : st.item} key={index}>
                        <Link href={i.url}>
                            <a>
                                {i.text}
                            </a>
                        </Link>
                    </li> 
                    )}
            </ul>
        </div>
    );
};

export default SideBar;