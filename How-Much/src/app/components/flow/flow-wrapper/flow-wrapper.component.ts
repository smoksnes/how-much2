import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { concatMap, Observable } from "rxjs";
import FlowService from "../../../services/flow-service";
import IFlow from "../../../interfaces/flow";
import { FlowItemComponent } from "../flow-item/flow-item.component";
import { CommonModule, NgIf } from "@angular/common";


@Component({
  standalone: true,
  selector: 'flow-wrapper-component',
  templateUrl: './flow-wrapper.component.html',
  styleUrls: ['./flow-wrapper.component.scss'],
  imports: [FlowItemComponent, NgIf, CommonModule ],  
})
export class FlowWrapperComponent implements OnDestroy  {
  sub: any;  
  id: number = 0;
  flow$: Observable<IFlow>;

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService
  ) { 
    this.flow$ = this.route.params.pipe(
      concatMap(params => {
        this.id = +params['id'];
        debugger;
        var flow = this.flowService.getFlowById(this.id);
        // var flow = this.store.select(getFlowById(this.id));
        // this.store.dispatch(FlowActions.selected({id: this.id}));
        return flow;
      }));
  }

  // ngOnInit() {
  //   // forkJoin()

  //     // switchMap() => 
      
      
  //     params => {
  //     this.id = +params['id']; // (+) converts string 'id' to a number
  //     return this.store.select(getFlowById(this.id));
  //   });

  //   //
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
