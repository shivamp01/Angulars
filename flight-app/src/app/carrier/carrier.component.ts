import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  flights : Flight[] = [];
  found : boolean;
  carrier : string;
  carriers : string[];

  constructor(private service : FlightService) {
    this.carriers = ["Indigo","Jet Airways"];
  }

  ngOnInit() {
  }

  getFlights() {
    this.service.flightByCarrier(this.carrier).subscribe(data => this.flights = data);
    this.found = true;
  }
}
