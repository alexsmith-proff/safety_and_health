import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Test'
    },
    noCorrectQuestions: [
        {
            idQuestion: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Qestion'
            },
            // Порядковый номер неправильного ответа
            noCorrectAnswer: Number
        }
    ],
    countNoCorrectAnswer : Number,
    created: Date
})

export const resultModel = mongoose.model('Result', ResultSchema)