import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  templateUrl: './Employee.html',
  styleUrls: ['./Employee.component.css']
})

export class EmployeeComponent implements OnInit
{

  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  e = new Employee();
 
  ngOnInit()
  {
    this.codingLanguages = ['C','Java','C++','C-Sharp','Python'];
    this.qualifications = ['BTech','M.Tech','MBA','MCA'];
    this.experience = ['Fresher','Moderate','Expert'];
  }
  Onsubmit(detail: Employee)
  {
    if(localStorage){ 
      if(localStorage.getItem("count") === null){
   
				localStorage.setItem("user1", JSON.stringify(detail, null, 4));					
      }
      else
      {
				  var a = localStorage.getItem("count");
					var b  = (+a) + 1;
					detail.id = b;
					localStorage.setItem("user"+b, JSON.stringify(detail, null, 4));
					localStorage.setItem("count",b+"");
				}
      }
    }
  }
