import { Component, computed, Signal, signal } from '@angular/core';
import CalculationService from '../../services/calculation-service';

@Component({
  selector: 'results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  suggestion: Signal<number> = computed(() => this.calculationService.totalSum());

  constructor(private calculationService : CalculationService){
    
  }
}
