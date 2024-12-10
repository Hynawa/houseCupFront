import { Injectable } from "@angular/core";
import { HouseDetails } from "./house-details";
import { ScoreDetails } from "../scores/score-details";
import { ScoreService } from "../scores/score-service";
import { Observable } from "rxjs";
import { HouseDto } from "./house-dto";
import { HttpClient } from "@angular/common/http";
import { HttpConfig } from "../../config/http-config";

@Injectable({
    providedIn: 'root'
})

export class HouseService {
    private urlExtension: string = '/house';

    constructor(private http: HttpClient){}

    getHouses(): Observable<HouseDto[]>{
        return this.http.get<HouseDto[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }
    getHouseDetails(): Observable<HouseDetails[]> | null{
        return null;
    }
}