import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  flight : Flight;
  carriers : string[];
  routes : string[];

  constructor(private service : FlightService, private router : Router) { 
    this.flight = new Flight();
    this.flight.flightNo=1001;
    this.carriers = ["Indigo","Jet Airways","Air India"];
    this.routes = ["Mumbai","Pune","Goa","Kolkata","Cochin","Chennai"];
  }

  ngOnInit() {
  }

  add() { 
    this.service.addFlight(this.flight);
    this.router.navigate(['code']);
  }
}
