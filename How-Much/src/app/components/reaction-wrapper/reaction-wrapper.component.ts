import { Component, ComponentFactoryResolver, ComponentRef, computed, effect, Signal, ViewChild, ViewContainerRef } from '@angular/core';
import { ReactionComponent } from '../reaction/reaction.component';
import CalculationService from '../../services/calculation-service';
import ICalculation from '../../interfaces/calculation';

@Component({
  selector: 'reaction-wrapper',
  imports: [],
  templateUrl: './reaction-wrapper.component.html',
  styleUrl: './reaction-wrapper.component.scss'
})
export class ReactionWrapperComponent {

  @ViewChild('container', { read: ViewContainerRef }) container: any;
  // componentRef: ComponentRef<any>;
  
  doubleCount: Signal<void> = computed(() => this.addItem(this.calculationService.lastCalculation()));

  constructor(private viewContainerRef: ViewContainerRef, private calculationService: CalculationService) {
  effect(() => {
    var calculation = this.calculationService.lastCalculation();
    if(this.container){
      //  const component = this.viewContainerRef.createComponent()
      const element: HTMLElement = document.createElement('div');
      element.classList.add('foo');
      
      this.container.element.nativeElement
                .appendChild(element);
    }
    });
  }

  addItem(calculation:ICalculation){
    // let component = this.viewContainerRef.createComponent(ReactionComponent);
    // this.container.createComponent(component);
  }

}
