import IQuestion, { IHaveQuestions } from "./question";

export default interface IFlow extends IHaveQuestions{
    id: number,
    name: string;
    questions: IQuestion[]
    // constructor(name:string, questions: Question[]){
    //     this.name = name;
    //     this. questions = questions;
    // }

}