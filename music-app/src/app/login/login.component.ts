import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth : LoginModel;
  roles : string[];

  constructor(private service : UserService, private router : Router) { 
    this.auth = new LoginModel();
    this.roles = ["Admin","User","Guest"];
  }

  ngOnInit(): void {
  }

  loggedIn() {
    let user = this.service.validate(this.auth);
    if(user != null) {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(['list']);
    } else
      alert("Invalid User ID/Password");
  }

  loggedOut() {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
}
