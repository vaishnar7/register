import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id=""
  todoForm;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private todoService:TodoService) {
      this.todoForm = this.formBuilder.group({
        name: '',
        description: ''
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.todoService.getById(this.id)
      .subscribe((data:any)=>{
        this.todoForm.setValue({
          name:data.name,
          description:data.description
        })
      })
    });
  }


  edit(){
    if(!this.todoForm.valid){
      alert("You have an error")
      //this.commonService.showError();
      return;
    }
    this.todoService.edit(this.id,this.todoForm.value.name,
      this.todoForm.value.description)
      .subscribe(data=>{
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
  }
}
