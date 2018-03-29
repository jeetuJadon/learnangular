import { Component,OnInit } from '@angular/core';


@Component(
  {selector: 'employee-details',
    templateUrl: './employeedetails.component.html',
    styleUrls: ['./employeedetails.component.css']
  })
export class EmployeeDetails implements OnInit {

  private name: string = 'Jeetu';
  private city: string = 'Valsad';
  private phoneNumber: Number = 9638054326;
    employees: any[] = [
    { name: "empo1", city: "jeetu", phoneNumber : 12333  },
    { name: "empo2", city: "Prateek", phoneNumber: 9969697969 },
    { name: "empo3", city: "Shreyas", phoneNumber: 2323344 }

  ];




  ngOnInit() {
   this.phoneNumber = 12345;
  }

}
