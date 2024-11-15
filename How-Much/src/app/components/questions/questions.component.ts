import { Component, computed, input, OnInit, Signal } from '@angular/core';
import IQuestion, { IHaveQuestions } from '../../interfaces/question';
import { CommonModule } from '@angular/common';
import IAnswer from '../../interfaces/answer';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'questions',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  questions = input.required<IHaveQuestions>();
  currentQuestion :Signal<IQuestion> = computed(() => this.questions().questions[0]);

  constructor(){
  }
  ngOnInit(): void {
    // this.currentQuestion = this.questions().questions[0];
    // throw new Error('Method not implemented.');
  }

  select(answer:IAnswer): void{
    console.log('hello');
  }
}
