import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  flight : Flight;
  no : number;
  searched : boolean;

  constructor(private service : FlightService) {
    this.flight = new Flight();
  }

  ngOnInit() {
  }
  
  getFlight() {
    this.service.flightByNo(this.no).subscribe(data => this.flight = data);
    this.searched = true;
  }

}
