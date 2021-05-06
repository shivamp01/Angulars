import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from 'src/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todo :TodoModel;
  category :string[];
  status :string[];

 
  constructor(private service : TodoService, private router: Router) { 
    this.todo=new TodoModel();
    this.category=["personal","official","family","gang"];
    this.status=["due","done","ignore","missed"]; 
  }

  ngOnInit(): void {
    if(localStorage.getItem("user")==null){
      this.router.navigate(['login']);
    }
  }

  addTodo(){
    
    this.service.createTodo(this.todo);
    this.router.navigate(['get'])
  }

}
