import React, { useState } from 'react';
import { ITest } from '../../interfaces/test';
import { AiOutlineDelete } from "react-icons/ai"

import s from './AllTest.module.scss'
import axios from 'axios';

type AllTestProps = {
    tests: ITest[]
}

const AllTest: React.FC<AllTestProps> = ({ tests }) => {

    const [testsArr, setTestsArr] = useState<ITest[]>([...tests])

    async function handleClickDelete(idTest: string) {
        setTestsArr(testsArr.filter(test => test._id !== idTest))
        try {
            await axios.post(process.env.SERVER_URL + '/api/tests/delete', {
                id: idTest
            }).then((response => response.data))
            tests.filter(test => test._id !== idTest)
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            {
                tests.length > 0 ? (
                    <table className={s.table}>
                        <tbody>
                            {
                                testsArr.map((item, index) => (
                                    <tr key={item._id}>
                                        <th className={s.th}>{index + 1}</th>
                                        <td className={s.td}>
                                            <div className={s.wrap}>
                                                <div>
                                                    {item.title}
                                                </div>
                                                <div>
                                                    <AiOutlineDelete
                                                        className={s.delete}
                                                        size={25}
                                                        onClick={() => handleClickDelete(item._id)}
                                                    />
                                                </div>
                                            </div>


                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
                    :
                    <div>Тестов нет</div>
            }
        </div>
    );
};

export default AllTest;