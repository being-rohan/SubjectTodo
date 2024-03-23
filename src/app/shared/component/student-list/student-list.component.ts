import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../models/interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentLIStComponent implements OnInit {
  stdArr!: Istd[]
  iseditmode: boolean = false
  constructor(private _tableSer: StudentService) { }

  ngOnInit(): void {
    this.stdArr = this._tableSer.fetch()
  }
  onedit(skill: Istd) {
    this._tableSer.editandupdate$.next(skill)

  }

  ondelete(std: Istd) {
    this._tableSer.delte(std)
  }
}
