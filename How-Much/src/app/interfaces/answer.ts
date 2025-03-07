import ICalculation from "./calculation";
import IQuestion, { IHaveQuestions } from "./question";

export default interface IAnswer extends IHaveQuestions {
    title: string;
    value: number;
    calculation: ICalculation;
    icon: string;
    questions: IQuestion[];

}

