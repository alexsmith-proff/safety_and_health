import React, { useEffect, useState } from 'react'
import { IReasult } from '../../interfaces/result'
import dateFormat from "dateformat";

import s from './AllResult.module.scss'

type AllResultProps = {
    results: IReasult[]
}

const AllResult: React.FC<AllResultProps> = ({ results }) => {
    const [resultsArr, setResultsArr] = useState<IReasult[]>([])

    useEffect(() => {
        setResultsArr(results)
    }, [results])

    return (
        <div className={s.main}>
            {
                resultsArr.length > 0 ?
                    <>
                        <table className={s.table}>
                            <tbody>
                                <tr className={s.tableHeader}>
                                    <th className={s.th}></th>
                                    <th className={s.th}>ФИО</th>
                                    <th className={s.th}>Н/отв</th>
                                    <th className={s.th}>Зачет</th>
                                    <th className={s.th}>Дата, время</th>
                                </tr>
                                {
                                    resultsArr.map((item, index) => (
                                        <tr key={item._id}>
                                            <td className={s.td}>
                                                <div className={s.text}>{index + 1}</div>
                                            </td>
                                            <td className={s.td}>
                                                <div className={s.text}>{item.idUser.surname + ' ' + item.idUser.name}</div>
                                            </td>
                                            <td className={s.td}>
                                                <div className={s.text}>{item.countNoCorrectAnswer}</div>
                                            </td>
                                            <td className={s.td}>
                                                <div className={s.text}>{item.countNoCorrectAnswer <= 2 ? 'Да' : 'Нет'}</div>
                                            </td>
                                            <td className={s.td}>
                                                <div className={s.text}>{dateFormat(item.created, "dd. mm. yyyy (HH:MM)")}</div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                    :
                    <div>Результатов нет</div>
            }
        </div>
    );
};

export default AllResult;