import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: String,
    answers: [
        {
            answerText: String,
            answer: Boolean
        }
    ]
})

export const questionModel = mongoose.model('Question', questionSchema)