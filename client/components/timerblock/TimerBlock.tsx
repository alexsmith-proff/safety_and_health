import React, { useEffect, useRef, useState, useMemo } from 'react';

import st from './timerblock.module.scss'

// type TimerBlockProps = {
//   workState: boolean,
//   setWorkState : () => void
// }

const TimerBlock = ({ workState, setWorkState, timeOut }) => {
  let intervalRef = useRef(null)
  const timerListRef = useRef<HTMLDivElement>(null)

  const [timeLeft, setTimeLeft] = useState(0)

  const TimerFunc = (workSt) => {
    if (workSt) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
      setTimeLeft(0)
      timerListRef.current.innerHTML = ''
      setWorkState(true)
      
    }
  }

  useEffect(() => {
    TimerFunc(workState)
  }, [workState])

  useEffect(() => {
    // console.log('timeLeft = ', timeLeft);
    
    if (timeLeft === 60) {
      timeOut()
    }
    if ((timeLeft % 4 === 0) && (timeLeft != 0)) {
      let elem = document.createElement('div')
      elem.classList.add(st.timerItem)
      timerListRef.current.appendChild(elem)
    }

  }, [timeLeft])

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