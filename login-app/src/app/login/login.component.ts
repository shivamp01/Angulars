import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {
  auth :LoginModel;
  flag :boolean;
  constructor() {
    this.auth=new LoginModel();
   }

  ngOnInit(): void {
  }

  validate(){
    //console.log(this.auth.userid+"  "+this.auth.passwd);
    if(this.auth.userid=='shivam' && this.auth.passwd=='shivam'){
      this.flag=true;
    }
  }
}
