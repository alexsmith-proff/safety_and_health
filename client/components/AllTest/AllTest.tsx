import React, { useEffect, useState } from 'react';
import { ITest } from '../../interfaces/test';
import { AiOutlineDelete } from "react-icons/ai"

import s from './AllTest.module.scss'
import axios from 'axios';

type AllTestProps = {
    tests: ITest[]
}

const AllTest: React.FC<AllTestProps> = ({ tests }) => {
    const t = [
        {
            _id: 'q',
            title: 'test1'
        },
        {
            _id: 'qw',
            title: 'test2'
        },
        {
            _id: 'qwe',
            title: 'test3'
        },
        {
            _id: 'qwer',
            title: 'test4'
        },
    ]

    const [isT, setIsT] = useState('sdsd')

    async function handleClickDelete(idTest: string) {
        setIsT('iiiiiiiiiii')
        // tests[0].title='dddddddddd'
        // t.filter(test => test._id !== idTest)
        console.log('idTest', idTest);
        
        // try {
        //     await axios.post(process.env.SERVER_URL + '/api/tests/delete', {
        //         id: idTest
        //     }).then((response => response.data))
        //     tests.filter(test => test._id !== idTest)
        // } catch (error) {
        //     console.log('error', error);
        // }
    }
    // useEffect(() => {
    //     console.log('useEffect');

    // }, [useEffect])

    console.log('AllTest');
    

    return (
        <div>
            {
                tests.length > 0 ? (
                    <table className={s.table}>
                        <tbody>
                            {
                                tests.map((item, index) => (
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
                                                        onClick={() => handleClickDelete('qw')}
                                                    />
                                                </div>
                                            </div>


                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                        {/* <AiOutlineDelete
                            className={s.delete}
                            size={25}
                        // onClick={handleClickDelete}
                        /> */}
                    </table>

                )
                    :
                    <div>Тестов нет</div>
            }
            {
                t.map((item, index) => <div key={index}>{item.title}</div>)
            }
            {isT}
        </div>
    );
};

export default AllTest;