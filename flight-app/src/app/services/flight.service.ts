import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService implements OnInit {
  private static baseUri : string = "http://localhost:8880/flight";
  flight : Flight;

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
  }

  addFlight(f : Flight) {
    this.http.post(FlightService.baseUri+"/add", f).subscribe(
      data => data = f);
  }

  flightByNo(no : number) : Observable<Flight> {
    return this.http.get<Flight>(FlightService.baseUri+"/byno/"+no)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  flightByCarrier(carrier: string) {
    return this.http.get<Flight[]>(FlightService.baseUri+"/bycarrier/"+carrier)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  flightByRoute(source: string, destiny : string) {
    return this.http.get<Flight[]>(FlightService.baseUri+"/byroute?src="+source
    +"&dest="+destiny)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
