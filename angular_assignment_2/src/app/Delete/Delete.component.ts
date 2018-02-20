import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee/Employee.model';
@Component({
  templateUrl: './Delete.component.html',
  styleUrls: ['./Delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  id: number;
  e= new Employee();
  constructor(private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.e.assign(JSON.parse(localStorage.getItem("user"+this.id)));
    if(window.confirm("Delete: "+this.e.firstname))
    
      if(localStorage.getItem("user"+this.id) != null)
      {
        localStorage.removeItem("user"+this.id);    
      }

    this.router.navigateByUrl('/employees');
    }
}
