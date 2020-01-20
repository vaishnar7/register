import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
    this.todoForm = this.formBuilder.group({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }

  ngOnInit() {
  }
  
  add(){
    if(!this.todoForm.valid){
      console.log(this.todoForm);
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
  get(name){
    return this.todoForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get('name').dirty || this.get('name').touched)
  }
}
