import axios from 'axios'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../redux/hooks'
import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import TimerBlock from '../../components/timerblock/TimerBlock'

import { IQuestion, IResultTest } from '../../interfaces/question'
import { ITest } from '../../interfaces/test'

import st from './id.module.scss'

interface TestProps {
  tests: ITest[],
  questions: IQuestion[]
}

const Test: React.FC<TestProps> = ({ tests, questions }) => {
  const user = useAppSelector(state => state.user.user)
  const router = useRouter()
  const [isVisiblePage, setIsVisiblePage] = useState<boolean>(false)
  const [workState, setWorkState] = useState<boolean>(true)
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [radioBtnClicked, setRadioBtnClicked] = useState<boolean>(false)
  const [radioBtnIndex, setRadioBtnIndex] = useState<number>(0)
  const [notSelectAnswer, setNotSelectAnswer] = useState<boolean>(false)
  const [result, setResult] = useState<IResultTest>({
    test: String(router.query.id),
    countAllQuestions: questions.length,
    countNoCorrectAnswer: 0,
    noCorrectQuestions: []
  })

  useEffect(() => {
    if ((!Object.keys(user).length) || (user.role === '')) {
      router.push('/login')
    } else {
      setIsVisiblePage(true)
    }
  }, [user])

  const handleRadioBtnClick = (index: number) => {
    setRadioBtnClicked(true)
    setRadioBtnIndex(index)
    setNotSelectAnswer(false)
  }

  const timeOut = () => {
    console.log('TIMEOUT')
    //Обработка результатов
    // noCorrectAnswer = 0 - сработал TimeOut
    setResult({
      ...result, countNoCorrectAnswer: result.countNoCorrectAnswer + 1,
      noCorrectQuestions: [
        ...result.noCorrectQuestions, { idQuestion: questions[questionIndex]._id, noCorrectAnswer: 0 }
      ]
    })
    // Следующий вопрос
    if (questionIndex < questions.length) {
      setQuestionIndex((prev) => prev + 1)
    }
    setWorkState(false)
  }

  const handleBtnClick = () => {
    // Проверка выбора ответа
    if (!radioBtnClicked) {
      return setNotSelectAnswer(true)
    } else {
      setNotSelectAnswer(false)
    }
    // Проверка результата
    if (!questions[questionIndex].answers[radioBtnIndex].answer) {
      setResult({
        ...result, countNoCorrectAnswer: result.countNoCorrectAnswer + 1,
        noCorrectQuestions: [
          ...result.noCorrectQuestions, { idQuestion: questions[questionIndex]._id, noCorrectAnswer: radioBtnIndex + 1 }
        ]
      })
    }
    // Следующий вопрос
    if (questionIndex < questions.length) {
      setQuestionIndex((prev) => prev + 1)
    }
    setRadioBtnClicked(false)
    setWorkState(false)
  }

  useEffect(() => {
    if (questionIndex >= questions.length) {
      axios.post('http://localhost:5000/api/results/create', {
        idUser: user._id,
        test: result.test,
        countAllQuestions: result.countAllQuestions,
        countNoCorrectAnswer: result.countNoCorrectAnswer,
        noCorrectQuestions: [...result.noCorrectQuestions],
      })
        .then(response => router.push('/result/' + response.data.id))
    }
  }, [questionIndex])


  return (
    <MainLayout tests={tests}>
      {
        isVisiblePage &&
        <div className={st.questions}>
          <div className="container">
            <TimerBlock workState={workState} setWorkState={setWorkState} timeOut={timeOut} />
            <div className={st.questionContainer}>
              <h2 className={st.title}>{'ВОПРОС №' + (questionIndex + 1)}</h2>
              {
                (questionIndex + 1) <= questions.length &&
                <>
                  <h3 className={st.text}>{questions[questionIndex].questionText}</h3>
                  <ul className={st.answersList}>
                    {
                      questions[questionIndex].answers.map((item, index) => (
                        <li className={st.answersItem} key={item._id} onClick={() => handleRadioBtnClick(index)}>
                          <input type="radio" id={item._id} name="group" value={index} onClick={() => handleRadioBtnClick(index)} />
                          <label className={st.answersText} htmlFor={item._id}>{item.answerText}</label>
                        </li>
                      ))
                    }
                  </ul>
                </>
              }


            </div>
            <button className={st.btn} onClick={handleBtnClick}>
              {
                questionIndex == questions.length - 1 ? 'Последний вопрос' : 'Следующий вопрос'
              }
            </button>
            {
              notSelectAnswer && <div className={st.error}>Выберите ответ</div>
            }
          </div>
        </div>
      }
    </MainLayout>
  )
}

export async function getServerSideProps({ query }) {
  const tests = await axios.get(process.env.SERVER_URL + '/api/tests')
    .then(response => response.data)

  const questions = await axios.get(process.env.SERVER_URL + '/api/questions/test/' + query.id)
    .then(response => response.data)

  return {
    props: { tests, questions }
  }
}

export default Test