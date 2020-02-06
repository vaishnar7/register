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
import { EditComponent } from './edit/edit.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';
import { CustomdirectiveDirective } from './directives/customdirective.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Route1Component,
    LoginComponent,
    TestComponent,
    SignupComponent,
    AddtodoComponent,
    EditComponent,
    CustomPipe,
    MycustompipePipe,
    CustomdirectiveDirective,
    HighlightDirective,
    HeaderComponent,
    RegisterComponent,
    BrowserAnimationsModule
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
