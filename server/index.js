import 'dotenv/config'
import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/auth.route.js'

const app = express()
app.use(express.json())

app.use('/api/auth', userRouter)

app.use(cors())

app.get('/', (req, res) => {
    console.log('kkkkkkk');
    res.send('hello world')
  })


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