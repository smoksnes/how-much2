import { Component, input, Input, OnInit } from '@angular/core';
import IQuestion from '../../interfaces/question';
import { MatDivider } from '@angular/material/divider';
import IAnswer from '../../interfaces/answer';
import { NgFor, NgIf } from '@angular/common';


@Component({
  standalone: true,
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

  constructor(){
  }
  ngOnInit(): void {
  }

  columnNumber = () => {
    return this.question()!.answers.length > 3 ? 3 : this.question()!.answers.length;
  }

  select = (answer: IAnswer) => {
    console.log(answer.title);
    console.log('hello');
    if(answer.questions != null && answer.questions.length > 0){
      console.log('hello');
      this.innerQuestions = answer.questions;
      this.innerQuestion = answer.questions[this.currentQuestionIndex];
    }
  }
}
