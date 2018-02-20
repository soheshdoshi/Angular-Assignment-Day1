import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/Employee.model';

@Component({

  templateUrl: './EmployeeList.component.html',
  styleUrls: ['./EmployeeList.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  data: string ;
  count: number ;
 
//move data from localstorage to employee list...
  constructor() { 
    this.data = localStorage.getItem("count");
    this.count = +this.data ;
  }
  ngOnInit() {
    for(var j = 1; j <= this.count; j++ )
    {
      var user = localStorage.getItem("user"+j);
      if(user!=null)
      {
        var value = JSON.parse(user);
        this.employees.push(value);
      }
    }
  }

}
