import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee/Employee.model';



@Component({
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: number ;
  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  emp = new Employee();
  title: string;
  
  
  constructor(private route: ActivatedRoute,private router: Router) {
   
  }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];

    if(localStorage.getItem("user"+this.id) != null)
       this.emp.assign(JSON.parse(localStorage.getItem("user"+this.id)));
    else{
      this.router.navigateByUrl('/employees');
    }

    this.codingLanguages = ['C','Java','C++','C-Sharp','Python'];
    this.qualifications = ['BTech','M.Tech','MBA','MCA'];
    this.experience = ['Fresher','Moderate','Expert'];
    
 }

  ngAfterViewInit(){
    for(let lang of this.emp.languages)
    {
      var a = <HTMLInputElement>document.getElementById(lang);
      a.checked = true;
    }
  }
 
  detail(empData: Employee){
       
    if(localStorage)
    {
      if(localStorage.getItem("user"+empData.id) != null)
      {
          localStorage.removeItem("user"+empData.id);					
					localStorage.setItem("user"+empData.id, JSON.stringify(empData, null,5));  
      }
    }
  }
}
