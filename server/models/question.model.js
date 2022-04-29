import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: String,
    answers: [
        {
            answerText: String,
            answer: Boolean
        }
    ],
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    }
})

export const questionModel = mongoose.model('Question', questionSchema)