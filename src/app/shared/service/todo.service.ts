import { Injectable } from '@angular/core';
import { Itodo } from '../models/interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(

  ) {
    this.todoSubject$
      .subscribe(res => {
        this.todoArr.push(res)
      })
  }

  todoArr: Itodo[] = [{
    todoitem: "Samsung",
    todoid: "45"
  },
  {
    todoitem: "Oppo",
    todoid: "451"
  }]


  todoSubject$: Subject<Itodo> = new Subject();
  editandupdate$: Subject<Itodo> = new Subject();

  fetchall(): Itodo[] {
    return this.todoArr
  }

  add(todoobj: Itodo) {
    this.todoArr.push(todoobj)
  }

  update(updateobj: Itodo) {
    for (let i = 0; i < this.todoArr.length; i++) {
      console.log(this.todoArr);

      if (this.todoArr[i].todoid === updateobj.todoid) {
        this.todoArr[i] = updateobj
      }

    }

  }
  delte(std: Itodo) {

    let getindex = this.todoArr.findIndex(todo => todo.todoid === todo.todoid)
    this.todoArr.splice(getindex, 1)
  }

}
