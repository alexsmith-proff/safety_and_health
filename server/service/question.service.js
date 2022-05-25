import { questionModel } from "../models/question.model.js";
export async function findQuestions() {
    return await questionModel.find()
}

export async function findQuestionById(id) {
    return await questionModel.findById(id)
}
export async function findQuestionByTestId(id) {
    return await questionModel.find({
        test: id
    })
}

export async function deleteQuestionById(id) {
    return await questionModel.deleteOne({_id: id})
}

export async function questionSaveDB(data) {
    const question = new questionModel
    question.questionText = data.questionText
    question.test = data.test
    data.answers.map(item => question.answers.push(item))
    return await question.save()
}