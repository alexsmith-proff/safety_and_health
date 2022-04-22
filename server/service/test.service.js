import { testModel } from "../models/test.model.js";

export async function findTests() {
    return await testModel.find()
}

export async function findTestById(id) {
    return await testModel.findById(id)
}

export async function testSaveDB(title) {
    const test = new testModel({title})
    return await test.save()
}