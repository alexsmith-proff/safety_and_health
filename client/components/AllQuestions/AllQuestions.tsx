import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IQuestion } from '../../interfaces/question';
import { AiOutlineDelete } from "react-icons/ai"

import s from './AllQuestions.module.scss'

type AllQuestionsProps = {
    questions: IQuestion[]
}

const AllQuestions: React.FC<AllQuestionsProps> = ({ questions }) => {

    const [questionsArr, setQuestionsArr] = useState<IQuestion[]>([])

    async function handleClickDelete(idQuestion: string) {
        setQuestionsArr(questionsArr.filter(question => question._id !== idQuestion))
        try {
            await axios.post(process.env.SERVER_URL + '/api/questions/delete', {
                id: idQuestion
            }).then((response => response.data))
            // tests.filter(test => test._id !== idTest)
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        setQuestionsArr(questions)
    }, [questions])

    return (
        <div className={s.main}>

            {
                questions.length > 0 ?
                    <>
                        <table className={s.table}>
                            <tbody>
                                {
                                    questionsArr.map((item, index) => (
                                        <tr key={item._id}>
                                            <th className={s.th}>{index + 1}</th>
                                            <td className={s.td}>
                                                <div className={s.wrap}>
                                                    <div>
                                                        {item.questionText}
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

                                {/* <tr>
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
                    </tr> */}
                            </tbody>
                        </table>
                    </>
                    :
                    <div>Вопросов нет</div>
            }
        </div>
    );
};

export default AllQuestions;