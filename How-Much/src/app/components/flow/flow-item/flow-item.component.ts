import { Component, computed, input, OnInit, Signal } from "@angular/core";
import FlowService from "../../../services/flow-service";
import IFlow from "../../../interfaces/flow";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router'; 
import { CommonModule, NgFor } from '@angular/common';
import { QuestionComponent } from "../../question/question.component";
import IQuestion from "../../../interfaces/question";
import { QuestionsComponent } from "../../questions/questions.component";

@Component({
  standalone: true,
  imports: [MatCardModule, 
    MatToolbarModule,
    MatChipsModule, 
    MatDividerModule, 
    MatIconModule, 
    MatGridListModule, 
    RouterLink, 
    NgFor, 
    CommonModule,
    QuestionComponent,
    QuestionsComponent
  ],
  selector: 'flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.scss']
})
export class FlowItemComponent implements OnInit {

  // CurrentFlow! : Input<IFlow>()

  flow = input.required<IFlow>();

  private questions: Signal<IQuestion[]> = computed(() => this.flow().questions);
  private currentQuestionIndex!:number;
  public currentQuestion!: IQuestion;

  constructor(private flowService: FlowService){

  }

  ngOnInit() {
    // this.questions = this.flow().questions;
    // this.currentQuestionIndex = 0;
    // this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  onFinished() {
    alert('Finished');
    }
}
