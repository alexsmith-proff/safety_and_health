import { resultModel } from "../models/result.model.js"

export async function findResults() {
    return await resultModel.find()
}


export async function findResultById(id) {
    return await resultModel.findById(id)
}

export async function findResultByIdUser(idUser) {
    return await resultModel.find({idUser})
}

export async function findResultByIdTest(idTest) {
    console.log('idTest', idTest);
    return await resultModel.find({test: idTest}).populate('idUser')
}

export async function resultSaveDB(data) {
    // console.log(new Date());
    const result = new resultModel
    result.idUser = data.idUser
    result.test = data.test
    result.countAllQuestions = data.countAllQuestions
    data.noCorrectQuestions.map(item => result.noCorrectQuestions.push(item))
    result.countNoCorrectAnswer = data.countNoCorrectAnswer
    result.created = new Date()
    await result.save()
    return result._id
}