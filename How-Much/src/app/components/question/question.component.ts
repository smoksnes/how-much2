import { Component, input, Input, OnInit } from '@angular/core';
import IQuestion from '../../interfaces/question';
import { MatDivider } from '@angular/material/divider';
import IAnswer from '../../interfaces/answer';
import { NgFor, NgIf } from '@angular/common';


@Component({
  standalone: true,
  imports: [MatDivider, NgFor],
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit  {
  question = input.required<IQuestion>();

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
  // this.store.dispatch(FlowActions.selectanswer({answer: answer}));
  }
}
