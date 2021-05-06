
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from 'src/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todoid :number;
  userid: number;
  todo :TodoModel;
   todos :TodoModel[]=[];
  found :boolean;
  constructor(private service: TodoService,private router :Router) { 

  }

  ngOnInit(): void {
    
    if(localStorage.getItem("user")==null){
      this.router.navigate(['login']);
    }
  }

  
  getTodo(){
    this.service.todoById(this.todoid).subscribe(data=> this.todo=data);
    console.log(this.todo.category)
    this.found=true;
  }

  getTodoByUserId(){
    
  this.service.todoByUser().then((result : TodoModel[])=>{
    
    this.todos=result;
    console.log(result);
    this.found=true;
  
  });
  }

  delete(index :number){
     let  ans=confirm("do you want to delete todo?");
     if(ans){
        alert(index);
        this.service.deleteTodo(index+1);
       // this.router.navigate(['add']);
     }
  }
}
