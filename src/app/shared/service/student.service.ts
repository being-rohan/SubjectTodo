import { Injectable } from '@angular/core';
import { Istd } from '../models/interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  StdArr: Istd[] = [{
    fname: "rohan",
    lname: "panchal",
    email: "rohanpan@1222",
    contact: 8308440223,
    stdId: 123
  },
  {
    fname: "nikhil",
    lname: "singe",
    email: "nikhil@1222",
    contact: 8308440223,
    stdId: 1234
  }]
  constructor() {
    this.stdadd$
      .subscribe(res => {
        this.StdArr.push(res)
        console.log(res);

      })
  }



  fetch(): Istd[] {
    return this.StdArr

  }
  stdadd$: Subject<Istd> = new Subject()
  editandupdate$: Subject<Istd> = new Subject()


  update(updateobj: Istd) {
    for (let i = 0; i < this.StdArr.length; i++) {
      console.log(this.StdArr);

      if (this.StdArr[i].stdId === updateobj.stdId) {
        this.StdArr[i] = updateobj
      }

    }

  }
  delte(std: Istd) {

    let getindex = this.StdArr.findIndex(todo => todo.stdId === todo.stdId)
    this.StdArr.splice(getindex,1)
  }

}
