import { Component, input, OnInit } from "@angular/core";
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

@Component({
  standalone: true,
  imports: [MatCardModule, MatToolbarModule,MatChipsModule, MatDividerModule, MatIconModule, MatGridListModule, RouterLink, NgFor, CommonModule],
  selector: 'flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.scss']
})
export class FlowItemComponent implements OnInit {
  // CurrentFlow! : Input<IFlow>()

  public flow = input<IFlow>();

  // currentQuestion$ : Observable<IQuestion>;
  constructor(private flowService: FlowService){
    debugger;
    // this.currentQuestion$ = this.store.select(getCurrentQuestion());
  }

  ngOnInit() {
  // this.CurrentQuestion = this.store.select(selectcurr);
  }
}
