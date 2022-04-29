import React from 'react'
import MainLayout from '../layouts/MainLayout'

function Index({tests}) {
  return ( 
    <div>
        <MainLayout tests={tests}>
            Главная Страница
        </MainLayout>
    </div>
  )
}

export async function getStaticProps()  {
  const res = await fetch('http://localhost:5000/api/tests')
  const tests = await res.json()
  return {
    props: {tests}
  }
}

export default Index