import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  employeeForm: Employee = {
    id: 0,
    name: '',
    designation: '',
    salary: 0,
   
    email:'',
    phone:'',
    experience:'',
    taskstatus:'',
  };
 
  constructor(private employeeService:EmployeeService,
    private router:Router) {}

    btnDisabled:boolean=false;
 
  ngOnInit(): void {}
 
  create(){
    this.employeeService.create(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employee/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}