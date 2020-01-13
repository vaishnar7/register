import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  todoForm;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private todoService:TodoService) { 
    this.todoForm = formBuilder.group({
      name: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  add(){
    if(!this.todoForm.valid){
      alert("You have an error")
      //this.commonService.showError();
      return;
    }
    this.todoService.add(this.todoForm.value.name,
      this.todoForm.value.description)
      .subscribe(data=>{
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
  }
}
