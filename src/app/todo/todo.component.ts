import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title="Todo 1";
  todos:any=[];

  constructor(private router: Router,
    private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.get()
    .subscribe(data=>{
      this.todos=data;
    });
  }
  addTodo(){
    this.router.navigate(['add']);
  }
  delete(todo){
    this.todos=this.todos.filter(function(t){
      return t!=todo;
    })
  }
}
