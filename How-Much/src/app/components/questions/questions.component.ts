import { Component, computed, EventEmitter, input, OnInit, Output, output, Signal } from '@angular/core';
import IQuestion, { IHaveQuestions } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import IAnswer from '../../interfaces/answer';
import { MatCardModule } from '@angular/material/card';
import CalculationService from '../../services/calculation-service';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'questions',
    imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
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

  constructor(private calculationService: CalculationService){

  }
  ngOnInit(): void {
    // this.currentQuestion = this.questions().questions[0];
    // throw new Error('Method not implemented.');
  }

  childIsFinishedHandler(): void{
    this.subQuestions = null;
    this.showNextQuestion();
  }

  private showNextQuestion(): void{
    const nextQuestionIndex = ++this.currentQuestionIndex;
    if(this.questions().questions && this.questions().questions.length >= nextQuestionIndex + 1){
      this.currentQuestion = computed(() => this.questions().questions[nextQuestionIndex]);
    }
    else{
      this.isFinished.emit();
    }
    // No more questions.
  }

  select(answer:IAnswer): void{
    this.calculationService.updateSum(answer.calculation);
    if(answer.questions){
      this.subQuestions = answer;
    }
    else{
      this.showNextQuestion();
    }
  }
}
