import React, { useEffect, useRef, useState, useMemo } from 'react';

import st from './timerblock.module.scss'

type TimerBlockProps = {
  workState: boolean
}


const TimerBlock = ({ workState }: TimerBlockProps) => {
  let intervalRef = useRef(null)
  const timerListRef = useRef(null)

  const [timeLeft, setTimeLeft] = useState(0)

  const TimerFunc = (workSt) => {
    console.log('TimerFunc');
    if (workSt) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    TimerFunc(workState)
  }, [workState])

  useEffect(() => {
    if (timeLeft === 60) {
      // TimerFunc(false)
      // alert('Вышло время')
    }
    if ((timeLeft % 4 === 0) && (timeLeft != 0)) {
      let elem = document.createElement('div')
      elem.classList.add(st.timerItem)
      timerListRef.current.appendChild(elem)
    }

  }, [timeLeft])

  console.log('asdasdasd');
  
  return (
    <div className={st.timer}>
      <div className={st.timerList} ref={timerListRef}>
        {/* <div className={st.timerItem}></div> */}
      </div>
      <div className={st.timerText}>Осталось {60 - timeLeft} сек</div>
    </div>
  );
};

export default TimerBlock;