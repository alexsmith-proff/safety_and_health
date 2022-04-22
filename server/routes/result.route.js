import { Router } from "express"
import { findResults, findResultByIdUser, resultSaveDB } from "../service/result.service.js"

export const resultRouter = Router()

resultRouter.post('/create', async(req, res) => {
    try {
        const data = req.body
        console.log(data);
        await resultSaveDB(data)
        res.status(201).json({
            message: 'Отчет создан'
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания отчета'
        })        
    }
})
resultRouter.get('/', async(req, res) => {
    try {
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
        const result = await findResultByIdUser(req.params.id)
        res.status(200).json(result)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка получения результата'
        })        
    }
})