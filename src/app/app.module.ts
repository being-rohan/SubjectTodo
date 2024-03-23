import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentLIStComponent } from './shared/component/student-list/student-list.component';
import { StiudentFormComponent } from './shared/component/stiudent-form/stiudent-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodolistComponent,
    StudentLIStComponent,
    StiudentFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
