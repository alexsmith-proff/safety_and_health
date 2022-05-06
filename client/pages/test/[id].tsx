import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IQuestion, IResultTest } from '../../interfaces/question'
import { ITest } from '../../interfaces/test'
import MainLayout from '../../layouts/MainLayout'
import TimerBlock from '../../components/timerblock/TimerBlock'

import st from './id.module.scss'

interface TestProps {
  tests: ITest[],
  questions: IQuestion[]
}

const Test = ({ tests, questions }: TestProps) => {
  const router = useRouter()
  const [workState, setWorkState] = useState(true)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [radioBtnClicked, setRadioBtnClicked] = useState(false)
  const [radioBtnIndex, setRadioBtnIndex] = useState(0)
  const [notSelectAnswer, setNotSelectAnswer] = useState(false)
  const [result, setResult] = useState<IResultTest>({
    idUser: '1325456572',
    test: router.query.id,
    countAllQuestions: questions.length,
    countNoCorrectAnswer: 0,
    noCorrectQuestions: []
  })

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
        // idUser: result.idUser,
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
        questionIndex < questions.length &&
        <div className={st.questions}>

          <div className="container">

            <TimerBlock workState={workState} setWorkState={setWorkState} timeOut={timeOut} />

            <div className={st.questionContainer}>

              <h2 className={st.title}>{'ВОПРОС №' + (questionIndex + 1)}</h2>
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
            </div>

            {/* <div className={st.btnCont}> */}
            <button className={st.btn} onClick={handleBtnClick}>
              {
                questionIndex == questions.length - 1 ? 'Последний вопрос' : 'Следующий вопрос'
              }
            </button>
            {
              notSelectAnswer && <div className={st.error}>Выберите ответ</div>
            }
            {/* <button onClick={handlerClickOn}>ON</button> */}
            {/* <button onClick={handlerClickOff}>OFF</button> */}
            {/* </div> */}

          </div>
        </div>
      }

    </MainLayout>

  )
}

export async function getServerSideProps({ query }) {
  const tests = await axios.get('http://localhost:5000/api/tests')
    .then(response => response.data)

  const questions = await axios.get('http://localhost:5000/api/questions/test/' + query.id)
    .then(response => response.data)

  return {
    props: { tests, questions }
  }
}

export default Test