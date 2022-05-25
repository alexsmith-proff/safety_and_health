interface IAnswer {
    _id?: string,
    answerText?: string,
    answer: boolean    
}
interface INoCorrectQuestion {
    idQuestion: string,
    // Порядковый номер неправильного ответа
    noCorrectAnswer: number
}
export interface IQuestion {
    _id: string,
    questionText: string,
    answers: IAnswer[],
    test: string

}
export interface IResultTest {
    _id?: string,
    idUser: string,
    test: string,
    countAllQuestions: number,
    countNoCorrectAnswer: number,
    noCorrectQuestions: INoCorrectQuestion[]
}