import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title="Todo 1";
  todos=[
    { name:"todo 1", description:"description1" },
    { name:"todo 2", description:"description2" },
    { name:"todo 3", description:"description3" },
  ];
  newTodo="";
  todoForm;

  tempValue='';

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  delete(todo){
    this.todos=this.todos.filter(function(t){
      return t!=todo;
    })
  }
  add(){
    this.todos.push({
      name: this.todoForm.value.name,
      description: this.todoForm.value.description,
    });
    // this.newTodo="";
  }

  onTextChange(event){
    this.newTodo=event.target.value;
  }
  onChange($event){
    this.tempValue = $event.target.value;
  }
}
