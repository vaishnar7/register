import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { Route1Component } from './route1/route1.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Route1Component,
    LoginComponent,
    TestComponent,
    SignupComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
