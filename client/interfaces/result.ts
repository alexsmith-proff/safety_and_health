import { IUser } from './user';
export interface IReasult {
    _id: string,
    idUser: IUser,
    idTest: string,
    countNoCorrectAnswer: number,
    created: Date 
}