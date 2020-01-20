import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { SignupComponent } from './signup/signup.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'todo', component: TodoComponent},
  { path:'add', component: AddtodoComponent},
  { path:'edit/:id', component: EditComponent},
  { path:'', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
