import { Component, OnInit } from '@angular/core';
import FlowService from '../../services/flow-service';
import { Observable } from 'rxjs';
import IFlow from '../../interfaces/flow';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
@Component({
    imports: [MatCardModule,
        MatToolbarModule,
        MatChipsModule,
        MatDividerModule,
        MatIconModule,
        MatGridListModule,
        RouterLink,
        NgFor,
        CommonModule],
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {  

  flows$: Observable<IFlow[]>;

  constructor(
    private service: FlowService ) { 
    this.flows$ = this.service.getAll();
    // console.log(this.flows);
  }
  ngOnInit(): void {
  }

}