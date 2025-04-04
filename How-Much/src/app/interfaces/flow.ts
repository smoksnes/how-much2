import IQuestion, { IHaveQuestions } from "./question";

export default interface IFlow extends IHaveQuestions{
    id: number,
    startSum: number,
    name: string;
    questions: IQuestion[]
    description: string;
    // constructor(name:string, questions: Question[]){
    //     this.name = name;
    //     this. questions = questions;
    // }

}