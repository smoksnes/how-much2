import { Component, ComponentFactoryResolver, ComponentRef, computed, effect, signal, Signal, ViewChild, ViewContainerRef } from '@angular/core';
import { ReactionComponent } from '../reaction/reaction.component';
import CalculationService from '../../services/calculation-service';
import ICalculation from '../../interfaces/calculation';
import { Operation } from '../../interfaces/operation';
import { CommonModule, NgFor } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'reaction-wrapper',
  imports: [NgFor, CommonModule, MatIcon],
  templateUrl: './reaction-wrapper.component.html',
  styleUrl: './reaction-wrapper.component.scss'
})
export class ReactionWrapperComponent {

  @ViewChild('container', { read: ViewContainerRef }) container: any;
  // items = ['Item 1', 'Item 2', 'Item 3'];
  // componentRef: ComponentRef<any>;
  // items = signal<ReactionItem[]>([]);
  items = this.calculationService.calculations;
  first = true;
  
  doubleCount: Signal<void> = computed(() => this.addItem(this.calculationService.lastCalculation()));

  constructor(private viewContainerRef: ViewContainerRef, private calculationService: CalculationService) {
  effect(() => {
    var calculation = this.calculationService.lastCalculation();
    // if(this.first){
    //   this.first = false;
    //   return;
    // }
  //   this.items.update(values => {
  //     return [...values, new ReactionItem(calculation.operation)];
  //  });
    // if(this.container){
    //   //  const component = this.viewContainerRef.createComponent()
    //   const element: HTMLElement = document.createElement('div');
    //   element.classList.add('reaction-item');
    //   // if(calculation.operation == Operation.Addition || calculation.operation == Operation.Multiplication){
    //   //   element.classList.add('positive-reaction');
    //   // }
    //   // else {
    //   //   element.classList.add('negative-reaction');
    //   // }
    //   this.container.element.nativeElement
    //             .appendChild(element);
    // }
    });
  }

  isPositiveReaction(calculation: ICalculation): boolean {
    if(calculation.operation == Operation.Addition || calculation.operation == Operation.Multiplication)
      return true;
    return false;
  }

  addItem(calculation:ICalculation){
    // let component = this.viewContainerRef.createComponent(ReactionComponent);
    // this.container.createComponent(component);
  }

}

export class ReactionItem{
  constructor(operation: Operation = Operation.None){
    this.operation = operation;
  }
  operation: Operation;
}