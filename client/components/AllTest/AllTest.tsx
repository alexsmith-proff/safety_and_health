import React from 'react';

import s from './AllTest.module.scss'

const AllTest: React.FC = () => {
    return (
        <div>
            <table className={s.table}>  
                <tbody>
                    <tr>
                        <th className={s.th}>1</th>
                        <td className={s.td}>Test1</td>
                    </tr>
                    <tr>
                        <th className={s.th}>2</th>
                        <td className={s.td}>Test11</td>
                    </tr>
                    <tr>
                        <th className={s.th}>3</th>
                        <td className={s.td}>Test111</td>
                    </tr>
                </tbody>
            </table>          
        </div>
    );
};

export default AllTest;