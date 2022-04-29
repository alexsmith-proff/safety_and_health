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
  const [workState, setWorkState] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [radioBtnClicked, setRadioBtnClicked] = useState(false)
  const [radioBtnIndex, setRadioBtnIndex] = useState(0)
  const [result, setResult] = useState<IResultTest>({
    idUser: '1325456572',
    test: 'qw23e324qwe',
    countNoCorrectAnswer: 0,
    noCorrectQuestions: []
  })

  const getResult = () => {
    console.log('Ответ', questions[questionIndex].answers[radioBtnIndex].answer);
  }

  const handleRadioBtnClick = (index: number) => {
    setRadioBtnClicked(true)
    setRadioBtnIndex(index)
  }

  const handleBtnClick = () => {
    // Проверка выбора ответа
    if (!radioBtnClicked) {
      return alert('Выберите ответ')
    }
    // Проверка результата
    if (!questions[questionIndex].answers[radioBtnIndex].answer) {
      // setResult({...result, countNoCorrectAnswer: result.countNoCorrectAnswer + 1})
      setResult({
        ...result, countNoCorrectAnswer: result.countNoCorrectAnswer + 1,
        noCorrectQuestions: [
          ...result.noCorrectQuestions, { idQuestion: 'qwerty', noCorrectAnswer: radioBtnIndex }
        ]
      })
    }
    // setResult({...result, countNoCorrectAnswer: 3})


    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1)
    } else {
      router.push('/')
    }

    setRadioBtnClicked(false)
  }
  console.log('result', result);


  useEffect(() => {
    // setWorkState(true)
  })
  console.log('ididididid');
  


  function handlerClickOn(){
    setWorkState(true)
  }
  function handlerClickOff(){
    setWorkState(false)
  }

  return (
    <MainLayout tests={tests}>
      <div className="container">

        <TimerBlock workState={true}/>

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
        <button onClick={handlerClickOn}>ON</button>
        <button onClick={handlerClickOff}>OFF</button>
        {/* </div> */}

      </div>


    </MainLayout>

  )
}

export async function getServerSideProps({ query }) {
  const tests = await axios.get('http://localhost:5000/api/tests')
    .then(response => response.data)

  const questions = await axios.get('http://localhost:5000/api/questions/test/' + query.id)
    .then(response => response.data)

  // console.log(questions)  
  return {
    props: { tests, questions }
  }
}

export default Test