import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import st from './index.module.scss'

function Index({ tests }) {
  return (
    <div>
      <MainLayout tests={tests}>
        <div className={st.main}>
          <div className="container">
            <h1 className={st.title}>Охрана труда</h1>
            <h2 className={st.subtitle}>Проверка знаний ИТР</h2>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.SERVER_URL + '/api/tests')
  const tests = await res.json()

  return {
    props: { tests }
  }
}

export default Index