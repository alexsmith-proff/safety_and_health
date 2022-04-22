import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    }
})

export const testModel = mongoose.model('Test', testSchema)