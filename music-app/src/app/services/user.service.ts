import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : LoginModel[] = [];

  constructor(private http : HttpClient, private router : Router) { 
    this.http.get<LoginModel[]>('../assets/users.json').subscribe(data => this.users = data);
    console.log(this.users);
  }

  validate(login : LoginModel) {
    return this.users.find(x => x.userid == login.userid && x.passwd == login.passwd)
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
}
