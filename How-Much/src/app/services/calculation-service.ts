import { effect, Injectable, signal } from "@angular/core";
import { Operation } from "../interfaces/operation";
import ICalculation from "../interfaces/calculation";

@Injectable({
    providedIn: 'root',
})
export default class CalculationService
{

    totalSum = signal<number>(0); 
    lastCalculation = signal<ICalculation>({operation: Operation.None, sum: 0}); 

    constructor(){
        effect(() => {
            console.log(`The current count is: ${this.totalSum()}`);
        });
    }

    public updateSum = (calculation: ICalculation) : void => {
        const currentSum = this.totalSum();
        switch(calculation.operation){
            case Operation.Addition:
                this.totalSum.set(currentSum + calculation.sum);
                break;
            case Operation.Subtraction:
                this.totalSum.set(currentSum - calculation.sum);
                break;
            case Operation.Multiplication:
                this.totalSum.set(currentSum * calculation.sum);
                break;
            case Operation.Division:
                this.totalSum.set(currentSum / calculation.sum);
                break;
            case Operation.None:
                break;
        }
        this.lastCalculation.set(calculation);
    }

}
