import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/login.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'music-app';
  user : LoginModel;

  constructor(private service : UserService) {
    this.user = new LoginModel();
  }
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user == null) {
      this.user = new LoginModel();
      this.user.userid="Guest";
    }
  }

  logout() {
    this.service.logout();
  }
}
