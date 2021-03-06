import { Router } from "express"
import { deleteQuestionById, findQuestionById, findQuestionByTestId, findQuestions, questionSaveDB } from "../service/question.service.js"

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

questionRouter.post('/delete', async(req, res) => {
    try {
        const { id } = req.body
        const question = await deleteQuestionById(id)
        res.status(200).json(question)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка удаления вопроса'
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
questionRouter.get('/test/:id', async(req, res) => {
    try {
        const questions = await findQuestionByTestId(req.params.id)
        res.status(200).json(questions)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения вопроса'
        })        
    }
})