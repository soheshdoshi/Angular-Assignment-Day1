import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 qualifications:any[];
  Experience:any[];
  model=new Employee('','','',null,'','','','','');
    submitted = false;

  onSubmit(value: any) { 
    console.log(value);
    this.submitted = true; 
     
    }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { 
  }

  ngOnInit() {
    this.Experience=['Beginner','Medium','expert'];
    this.qualifications=['MBA','B.Tech','M.Tech'];
    
  }
  newHero() {
  this.model = new Employee('','','',null,'','','','','');
}




}
