import React from 'react';
import s from './AllQuestions.module.scss'

const AllQuestions: React.FC = () => {
    return (
        <div className={s.main}>
            <table className={s.table}>  
                <tbody>
                    <tr>
                        <th className={s.th}>1</th>
                        <td className={s.td}>Что соответствует понятию «Охрана труда» </td>
                    </tr>
                    <tr>
                        <th className={s.th}>2</th>
                        <td className={s.td}>Что соответствует понятию «Охрана труда» </td>
                    </tr>
                    <tr>
                        <th className={s.th}>3</th>
                        <td className={s.td}>Что соответствует понятию «Охрана труда» </td>
                    </tr>
                </tbody>
            </table>      
        </div>
    );
};

export default AllQuestions;