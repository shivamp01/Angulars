import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  flights : Flight[] = [];
  found : boolean;
  source : string;
  destiny : string;
  routes : string[];

  constructor(private service : FlightService) { 
    this.routes = ["Mumbai","Pune","Goa","Kolkata","Kochin","Chennai"];
  }

  ngOnInit() {
  }

  getFlights() {
    this.service.flightByRoute(this.source, this.destiny).subscribe(data => this.flights = data);
    this.found = true;
  }

}
