import { resultModel } from "../models/result.model.js"

export async function findResults() {
    return await resultModel.find()
}

export async function findResultByIdUser(idUser) {
    return await resultModel.find({idUser})
}

export async function resultSaveDB(data) {
    console.log(new Date());
    const test = new resultModel({
        idUser: data.idUser,
        test: data.test,
        countNoCorrectAnswer: data.countNoCorrectAnswer,
        created: new Date()
    })
    return await test.save()
}