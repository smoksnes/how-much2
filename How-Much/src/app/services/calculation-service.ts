import { Injectable, signal } from "@angular/core";
import IFlow from "../interfaces/flow";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export default class CalculationService
{

    totalSum = signal<number>(0); 

constructor(){}
    public updateSum = (sum: number, operation:Operation) : void => {
        const currentSum = this.totalSum();
        switch(operation){
            case Operation.Addition:
                this.totalSum.set(currentSum + sum);
                break;
            case Operation.Subtraction:
                this.totalSum.set(currentSum - sum);
                break;
            case Operation.Multiplication:
                this.totalSum.set(currentSum * sum);
                break;
            case Operation.Division:
                this.totalSum.set(currentSum / sum);
                break;
        }
    }
}

enum Operation {
    Addition,
    Subtraction,
    Multiplication,
    Division,
  }