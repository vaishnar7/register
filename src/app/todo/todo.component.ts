import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title="Todo 1";
  todos=[
    "todo 1",
    "todo 2",
    "todo 3",
  ]
  constructor() { }

  ngOnInit() {
  }

}
