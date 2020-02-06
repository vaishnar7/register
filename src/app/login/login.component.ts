import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import{
  trigger,
  state,
  style,
  animate,
  transition
}from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [trigger('openClose' ,[
    state('open',style({
      
    }))
  ])]
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private router: Router,private formbuilder: FormBuilder,private userService:UserService,
    private commonService:CommonService ) {
     this.loginForm = this.formbuilder.group({
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      });
    }
    get(name){
      return this.loginForm.get(name);
    }
    hasError(name){
      return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
    }

  ngOnInit() {}

  view(){
    //this.errorService.showError();
    this.router.navigate(['todo']);
    //this.router.navigateByUrl('/todo');
  }
  login(){
    this.userService.login(this.loginForm.value)
    .subscribe((data:any)=>{
    //console.log("success",data);
    this.commonService.setItem('user',data.user);
    this.router.navigate(['/todo']);
    },err=>{
      alert(err.error.message);
      
    
    });
  }
}