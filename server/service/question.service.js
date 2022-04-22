import { questionModel } from "../models/question.model.js";
export async function findQuestions() {
    return await questionModel.find()
}

export async function findQuestionById(id) {
    return await questionModel.findById(id)
}

export async function questionSaveDB(data) {
    const question = new questionModel
    question.questionText = data.questionText
    data.answers.map(item => question.answers.push(item))
    return await question.save()
}