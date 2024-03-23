import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todoArr!: Itodo[]
  constructor(private _todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoArr = this._todoservice.fetchall()
  }

  onedit(skill: Itodo) {
    
    this._todoservice.editandupdate$.next(skill)
    console.log(skill);
  }
  ondelete(obj:Itodo){
    this._todoservice.delte(obj)
  }



}
