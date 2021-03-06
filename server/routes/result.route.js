import { Router } from "express"
import { findResults, findResultByIdUser, resultSaveDB, findResultById, findResultByIdTest } from "../service/result.service.js"

export const resultRouter = Router()

resultRouter.post('/create', async(req, res) => {
    try {
        const data = req.body
        console.log(data);
        const id = await resultSaveDB(data)
        res.status(201).json({
            message: 'Отчет создан',
            id
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания отчета'
        })        
    }
})
resultRouter.get('/', async(req, res) => {
    try {
        console.log('getRelts');
        const results = await findResults()
        res.status(200).json(results)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения результатов'
        })        
    }
})
resultRouter.get('/:id', async(req, res) => {
    try {
        const result = await findResultById(req.params.id)
        res.status(200).json(result)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения результата'
        })        
    }
})
resultRouter.get('/user/:id', async(req, res) => {
    try {
        const result = await findResultByIdUser(req.params.id)
        res.status(200).json(result)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения результата'
        })        
    }
})
resultRouter.get('/test/:id', async(req, res) => {
    try {
        const result = await findResultByIdTest(req.params.id)
        res.status(200).json(result)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения результата'
        })        
    }
})