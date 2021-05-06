import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';
import { UserService } from '../services/user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth :LoginModel;
 found : boolean;
 
  constructor(public service: UserService,private router: Router) { 
   this.auth=new LoginModel();
  }

  ngOnInit(): void {
  }

  validate(){
    let userm : UserModel;
    this.service.validateLogin(this.auth.email,this.auth.passwd).then((result: UserModel)=>{
        userm=result;
        if(userm!=null){
          localStorage.setItem("user",JSON.stringify(userm));
          this.router.navigate(['get']);
      }else{
          alert("login failed");
      }
    }); 
  }
}
