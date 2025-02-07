import { Component, computed, EventEmitter, input, OnInit, Output, output, Signal } from '@angular/core';
import IQuestion, { IHaveQuestions } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import IAnswer from '../../interfaces/answer';
import { MatCardModule } from '@angular/material/card';
import { QuestionComponent } from "../question/question.component";

@Component({
  selector: 'questions',
  standalone: true,
  imports: [CommonModule, MatCardModule, QuestionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  @Output() isFinished = new EventEmitter();
  
  questions = input.required<IHaveQuestions>();
  childIsFinished = output<Signal<boolean>>();
  currentQuestion :Signal<IQuestion> = computed(() => this.questions().questions[0]);
  currentQuestionIndex = 0;
  subQuestions: IHaveQuestions | null = null;

  constructor(){

  }
  ngOnInit(): void {
    // this.currentQuestion = this.questions().questions[0];
    // throw new Error('Method not implemented.');
  }

  childIsFinishedHandler(): void{
    console.log('childIsFinishedHandler');
    this.subQuestions = null;
    this.showNextQuestion();
  }

  private showNextQuestion(): void{
    console.log('hello');
    const nextQuestionIndex = ++this.currentQuestionIndex;
    if(this.questions().questions && this.questions().questions.length > nextQuestionIndex + 1){
      this.currentQuestion = computed(() => this.questions().questions[nextQuestionIndex]);
    }
    else{
      this.isFinished.emit();
    }
    // No more questions.
  }



  select(answer:IAnswer): void{
    if(answer.questions){
      this.subQuestions = answer;
    }
    else{
      this.showNextQuestion();
    }
  }
}
