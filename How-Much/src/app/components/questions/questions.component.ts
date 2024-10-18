import { Component, input } from '@angular/core';
import { IHaveQuestions } from '../../interfaces/question';

@Component({
  selector: 'questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  questions = input.required<IHaveQuestions>();
}
