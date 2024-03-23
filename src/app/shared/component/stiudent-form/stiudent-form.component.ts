import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { UuidService } from '../../service/uuid.service';
import { Istd, Itodo } from '../../models/interface';

@Component({
  selector: 'app-stiudent-form',
  templateUrl: './stiudent-form.component.html',
  styleUrls: ['./stiudent-form.component.scss']
})
export class StiudentFormComponent implements OnInit {
  stdForm!: FormGroup
  editMode: boolean = false
  idGet!: Istd
  constructor(private _stdSer: StudentService,
    private _uuid: UuidService) {

  }

  ngOnInit(): void {
    this.createform()
    this._stdSer.editandupdate$
      .subscribe(res => {
        console.log(res);
        this.idGet = res
        this.editMode = true
        this.stdForm.patchValue(res)

      })
  }
  createform() {
    this.stdForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required])
    })
  }

  onadd() {
    if (this.stdForm.valid) {
      let obj: Istd = { ... this.stdForm.value, stdId: this._uuid.uuid() }
      this._stdSer.stdadd$.next(obj)
      this.stdForm.reset()


    }


  }

  onupdate() {
    if (this.stdForm.valid) {

      let obj: Istd = { ... this.stdForm.value, stdId: this.idGet.stdId }
      this._stdSer.update(obj)
      this.editMode = false
      this.stdForm.reset()
    }
  }



}

