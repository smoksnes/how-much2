import IAnswer from "./answer";

export default interface IQuestion{
    title:string;
    answers:IAnswer[]
    answered:boolean
}

export interface IHaveQuestions{
    questions:IQuestion[]
}
