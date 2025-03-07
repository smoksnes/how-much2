import { Component, input, Input, OnInit } from '@angular/core';
import IQuestion from '../../interfaces/question';
import { MatDivider } from '@angular/material/divider';
import IAnswer from '../../interfaces/answer';
import { NgFor, NgIf } from '@angular/common';
import CalculationService from '../../services/calculation-service';


@Component({
    imports: [MatDivider, NgFor, NgIf],
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit  {
  question = input.required<IQuestion>();
  innerQuestions: IQuestion[] | undefined;
  innerQuestion: IQuestion | undefined;
  private currentQuestionIndex:number = 0;

  constructor(private calculationService: CalculationService) {
  }
  ngOnInit(): void {
  }

  columnNumber = () => {
    return this.question()!.answers.length > 3 ? 3 : this.question()!.answers.length;
  }

  select = (answer: IAnswer) => {
    this.calculationService.updateSum(answer.calculation);

    console.log(answer.title);
    if(answer.questions != null && answer.questions.length > 0){
      this.innerQuestions = answer.questions;
      this.innerQuestion = answer.questions[this.currentQuestionIndex];
    }
  }
}
