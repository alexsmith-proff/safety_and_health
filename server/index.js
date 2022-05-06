import 'dotenv/config'
import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/auth.route.js'
import { testRouter } from './routes/test.route.js'
import { questionRouter } from './routes/question.route.js'
import { resultRouter } from './routes/result.route.js'

const app = express()
app.use(express.json())

app.use(cors())

app.use('/api/auth', userRouter)
app.use('/api/tests', testRouter)
app.use('/api/questions', questionRouter)
app.use('/api/results', resultRouter)




const startApp = async() => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('База данных подключена')
        app.listen(process.env.PORT, () => console.log(`Сервер запущен на PORT = ${process.env.PORT}`))
    } catch (error) {
        console.log(error)
        
    }
}

startApp()