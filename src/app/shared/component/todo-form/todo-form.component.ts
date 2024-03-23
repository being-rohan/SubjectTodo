import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from '../../models/interface';
import { UuidService } from '../../service/uuid.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm!: FormGroup;
  idGet!: Itodo
  editMode: boolean = false
  constructor(
    private _todoService: TodoService,
    private _uuid: UuidService) {

  }

  ngOnInit(): void {
    this.createForm();
    this._todoService.editandupdate$
      .subscribe(res => {
        console.log(res);
        this.idGet = res
        this.editMode = true
        this.todoForm.patchValue(res)

      })

  }

  createForm() {
    this.todoForm = new FormGroup({
      todoitem: new FormControl(null, [Validators.required])
    })
  }

  
  onadd() {
    if (this.todoForm.valid) {
      let obj: Itodo = { ... this.todoForm.value, id: this._uuid.uuid() }

      this._todoService.todoSubject$.next(obj)


    }
  }


  onupdate() {
    if (this.todoForm.valid) {

      let updateobj: Itodo = { ...this.todoForm.value, todoid: this.idGet.todoid }
      this._todoService.update(updateobj)
      console.log(updateobj);

    }
  }

}
