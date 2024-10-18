import { Injectable } from "@angular/core";
import IFlow from "../interfaces/flow";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export default class FlowService
{

constructor(private http: HttpClient){}

    public getAll = () : Observable<IFlow[]> => {
        return this.http.get<Array<IFlow>>('./assets/flows.json');
    }

    public getFlowById = (id: number) : Observable<IFlow> => {
        return this.http.get<Array<IFlow>>(`./assets/flows.json`).pipe(
            map((flows: IFlow[]) => flows.find(flow => flow.id === id) as IFlow)
        );
    }
}