import { Router } from "express"
import { findQuestionById, findQuestions, questionSaveDB } from "../service/question.service.js"

export const questionRouter = Router()

questionRouter.post('/create', async(req, res) => {
    try {
        const data = req.body
        // console.log('data', data);
        await questionSaveDB(data)
        res.status(201).json({
            message: `Вопрос ${data.questionText} создан`
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания вопроса'
        })        
    }
})
questionRouter.get('/', async(req, res) => {
    try {
        const questions = await findQuestions()
        // console.log('questions', questions);
        res.status(200).json(questions)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения вопросов'
        })        
    }
})
questionRouter.get('/:id', async(req, res) => {
    try {
        const question = await findQuestionById(req.params.id)
        // console.log('question', questions);
        res.status(200).json(question)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения вопроса'
        })        
    }
})