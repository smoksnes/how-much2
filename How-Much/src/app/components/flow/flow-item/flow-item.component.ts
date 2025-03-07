import { Component, computed, input, OnInit, signal, Signal } from "@angular/core";
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
import { ResultsComponent } from "../../results/results.component";
import { ReactionComponent } from "../../reaction/reaction.component";

@Component({
    imports: [MatCardModule,
        ResultsComponent,
        MatToolbarModule,
        MatChipsModule,
        MatDividerModule,
        MatIconModule,
        MatGridListModule,
        CommonModule,
        QuestionsComponent,
        ResultsComponent,
        ReactionComponent
    ],
    selector: 'flow-item',
    templateUrl: './flow-item.component.html',
    styleUrls: ['./flow-item.component.scss']
})
export class FlowItemComponent implements OnInit {

  // CurrentFlow! : Input<IFlow>()

  flow = input.required<IFlow>();
  finished = signal<boolean>(false);

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
    this.finished.set(true);
    }
}
