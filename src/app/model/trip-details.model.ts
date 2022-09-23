import { Injectable } from "@angular/core";
import { Timestamp } from "rxjs";
import { Destinations } from "./destinations.model";

@Injectable({
  providedIn: 'root'
})
export class TripDetailsModel {

    public noOfDestinations: number;
    public destinations: Destinations[];
    public createdBy: string;
    public createdDt: Date;

}