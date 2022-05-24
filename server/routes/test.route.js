import { Router } from "express"
import { deleteTestById, findTestById, findTests, testSaveDB } from "../service/test.service.js"

export const testRouter = Router()

testRouter.get('/', async(req, res) => {
    try {
        const tests = await findTests()
        res.json(tests)
        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения тестов'
        })
    }
})
testRouter.post('/create', async(req, res) => {
    try {
        const { title } = req.body
        await testSaveDB(title)
        res.status(201).json({
            message: `Тест ${title} создан`
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания теста'
        })        
    }
})
testRouter.get('/:id', async(req, res) => {
    try {
        const test = await findTestById(req.params.id)
        res.status(200).json(test)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения теста'
        })        
    }
})
testRouter.post('/delete', async(req, res) => {
    try {
        const { id } = req.body
        const test = await deleteTestById(id)
        res.status(200).json(test)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка удаления теста'
        })        
    }
})