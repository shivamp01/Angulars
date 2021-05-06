import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginModel } from 'src/login.model';
import { UserModel } from '../user.model';
import { catchError, delay, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri : string = "http://localhost:8780/user";
  user : UserModel;

  constructor(private http : HttpClient,private router :Router) { 
    
  }

  async validateLogin(email :string, passwd:string){
   // console.log(auth.email+"  "+auth.passwd);
    return await this.http.get<UserModel>(this.baseUri+"/login?email="+email+"&passwd="+passwd)
    .pipe(retry(1),catchError(this.handleError)).toPromise();
  }

  createUser(user : UserModel){
    this.http.post(this.baseUri+"/adduser",user).subscribe(data=>data=this.user);
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
 
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['get']);
  }
}
