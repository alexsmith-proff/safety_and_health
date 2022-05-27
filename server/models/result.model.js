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
    countAllQuestions: Number,
    noCorrectQuestions: [
        {
            idQuestion: {
                type: String
                // type: mongoose.Schema.Types.ObjectId,
                // ref: 'Question'
            },
            // Порядковый номер неправильного ответа
            noCorrectAnswer: Number
        }
    ],
    countNoCorrectAnswer : Number,
    created: Date

})

export const resultModel = mongoose.model('Result', ResultSchema)